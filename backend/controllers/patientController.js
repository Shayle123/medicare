const Patient = require("../models/Patient");

// ===============================
// Get All Patients (Search + Pagination)
// ===============================
exports.getPatients = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const query = { isDeleted: false };

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { patientId: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    const total = await Patient.countDocuments(query);

    const patients = await Patient.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ patients, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// Get Single Patient
// ===============================
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ _id: req.params.id, isDeleted: false });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// Create Patient
// ===============================
exports.createPatient = async (req, res) => {
  try {
    if (!req.body.firstName) {
      return res.status(400).json({ message: "First Name Required" });
    }
    if (!req.body.lastName) {
      return res.status(400).json({ message: "Last Name Required" });
    }
    if (!req.body.phone) {
      return res.status(400).json({ message: "Phone Number Required" });
    }
    if (!req.body.gender) {
      return res.status(400).json({ message: "Gender Required" });
    }
    if (req.body.age === undefined || req.body.age === null || req.body.age === "") {
      return res.status(400).json({ message: "Age Required" });
    }

    const patient = await Patient.create(req.body);

    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// Update Patient
// ===============================
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// Soft Delete Patient
// ===============================
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json({ message: "Patient Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// Restore Patient
// ===============================
exports.restorePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { isDeleted: false },
      { new: true }
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json({ message: "Patient Restored Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ===============================
// Patient Count
// ===============================
exports.getPatientCount = async (req, res) => {
  try {
    const total = await Patient.countDocuments({ isDeleted: false });
    const active = await Patient.countDocuments({ status: "Active", isDeleted: false });
    const inactive = await Patient.countDocuments({ status: "Inactive", isDeleted: false });

    res.json({ total, active, inactive });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};