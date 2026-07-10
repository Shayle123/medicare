const Appointment=require("../models/Appointment");

// Get All Appointments

exports.getAppointments=async(req,res)=>{

try{

const appointments=await Appointment.find()

.populate("patient")

.populate("doctor")

.sort({date:1});

res.json(appointments);

}catch(err){

res.status(500).json({

message:err.message

});

}

};
exports.createAppointment=async(req,res)=>{

try{

const appointment=await Appointment.create(req.body);

const result=await Appointment.findById(appointment._id)

.populate("patient")

.populate("doctor");

res.status(201).json(result);

}catch(err){

res.status(500).json({

message:err.message

});

}

};
exports.getAppointment=async(req,res)=>{

try{

const appointment=await Appointment.findById(req.params.id)

.populate("patient")

.populate("doctor");

if(!appointment){

return res.status(404).json({

message:"Appointment not found"

});

}

res.json(appointment);

}catch(err){

res.status(500).json({

message:err.message

});

}

};
exports.updateAppointment=async(req,res)=>{

try{

const appointment=await Appointment.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

)

.populate("patient")

.populate("doctor");

res.json(appointment);

}catch(err){

res.status(500).json({

message:err.message

});

}

};
exports.deleteAppointment=async(req,res)=>{

try{

await Appointment.findByIdAndDelete(req.params.id);

res.json({

message:"Appointment Deleted"

});

}catch(err){

res.status(500).json({

message:err.message

});

}

};

const Doctor=require("../models/Doctor");
// Get Booking Data (Doctors + Available Time Slots)

exports.getBookingData = async (req,res)=>{

try{

const doctors = await Doctor.find();

const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM"
];


res.json({
    doctors,
    timeSlots
});


}catch(err){

res.status(500).json({
    message:err.message
});

}

};
exports.updateAppointmentStatus = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }


        
        if (
            req.user.role === "doctor" &&
            appointment.doctor.toString() !== req.user.id
        ) {
            return res.status(403).json({
                message: "You cannot update this appointment"
            });
        }


        appointment.status = req.body.status;

        await appointment.save();


        res.status(200).json({
            success: true,
            message: "Appointment status updated",
            appointment
        });


    } catch(error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};