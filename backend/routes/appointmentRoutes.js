const express=require("express");

const router=express.Router();
const { updateAppointmentStatus } = require("../controllers/appointmentController");
const controller=require("../controllers/appointmentController");
const appointmentController = require("../controllers/appointmentController");


const auth=require("../middleware/authMiddleware");
router.get(
"/booking-data",
auth,
appointmentController.getBookingData
);

router.get("/",auth,controller.getAppointments);

router.get("/:id",auth,controller.getAppointment);

router.post("/",auth,controller.createAppointment);
router.put(
 "/status/:id",
 auth,
 updateAppointmentStatus
);
router.put("/:id",auth,controller.updateAppointment);

router.delete("/:id",auth,controller.deleteAppointment);


module.exports=router;