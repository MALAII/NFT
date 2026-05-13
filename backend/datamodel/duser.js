import mongoose from "mongoose";

//BECOME VOLUNTEER

const volunteer = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true,
    },
    city: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "Volunteer"
    },

}, { timestamps: true })

export const volunteerData = mongoose.model("Volunteer-Datas", volunteer)

/*
const adminSendOtp = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    adminOtp: {
        type: String,
        default: ""
    },
    adminExpireOtp: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


export const adminResetPassword = mongoose.model("adminSendOtp", adminSendOtp)
*/


// IMAGE SCHEMA

const adminImageVideos = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    publicId: {
        type: String,
        required: true
    }

}, { timestamps: true })

export const adminUploadImageVideo = mongoose.model(
    "adminUploadImageVideo",
    adminImageVideos
)


// VIDEO SCHEMA

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    videoUrl: {
        type: String,
        required: true
    },

    cloudinaryId: {
        type: String,
        required: true
    }

}, { timestamps: true });

export const Video = mongoose.model('Video', videoSchema);