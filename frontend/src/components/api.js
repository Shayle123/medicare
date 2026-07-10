const SERVER_BASE_URL = "http://localhost:5000";
const API_BASE_URL = `${SERVER_BASE_URL}/api`;

function getToken() {
  return localStorage.getItem("token");
}

function setToken(token) {
  localStorage.setItem("token", token);
}

function clearToken() {
  localStorage.removeItem("token");
}

function getFileUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SERVER_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

async function apiRequest(path, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || `Request failed: ${res.status}`);
  }

  // 204 No Content এর ক্ষেত্রে body parse করার চেষ্টা না করা
  if (res.status === 204) return null;

  return res.json();
}

export const api = {
  // --- Generic low-level HTTP verbs ---
  get: (path) => apiRequest(path, { method: "GET" }),
  post: (path, body) => apiRequest(path, { method: "POST", body: JSON.stringify(body) }),
  put: (path, body) => apiRequest(path, { method: "PUT", body: JSON.stringify(body) }),
  patch: (path, body) => apiRequest(path, { method: "PATCH", body: JSON.stringify(body) }),
  delete: (path) => apiRequest(path, { method: "DELETE" }),

  // --- Auth ---
  // Automatically stores the token on successful login/register.
  login: async (email, password) => {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (data?.token) setToken(data.token);
    return data;
  },
  register: async (payload) => {
    const data = await apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (data?.token) setToken(data.token);
    return data;
  },
  logout: () => clearToken(),

  // --- Dashboard ---
  getStats: () => apiRequest("/dashboard/stats"),

  // --- Generic resource helpers (used by AdminDashboard.jsx) ---
  // usage: api.list("patients"), api.create("patients", {...}), etc.
  list: (resource) => apiRequest(`/${resource}`),
  getOne: (resource, id) => apiRequest(`/${resource}/${id}`),
  create: (resource, payload) =>
    apiRequest(`/${resource}`, { method: "POST", body: JSON.stringify(payload) }),
  update: (resource, id, payload) =>
    apiRequest(`/${resource}/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  remove: (resource, id) => apiRequest(`/${resource}/${id}`, { method: "DELETE" }),
};

export { getToken, setToken, clearToken, getFileUrl };