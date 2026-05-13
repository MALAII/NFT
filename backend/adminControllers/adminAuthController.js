/*

import express from "express";
import { adminResetPassword } from "../datamodel/duser.js";
//import transport from "../nodemailer/nodeMailer.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
dotenv.config()


const adminRouter = express.Router()


export const adminLogin = adminRouter.post('/adminLogin',async (req, res) => {


    const { email, password } = req.body

    console.log(email, password)

    try {
        const check = await adminResetPassword.findOne()


        const passwordCheck = await bcrypt.compare(password, check.password)

        const checkAdminLogin = await email === process.env.ADMIN_EMAIL && passwordCheck

        if (!checkAdminLogin) {

            return res.json({ success: false, message: "Invalid email or password", token: "" })

        }
        else {

            const token = await jwt.sign(email + password, process.env.JSONWEB_SECRET)

            return res.json({ success: true, message: "login successfull ", token: token })

        }
    }

    catch (error) {
        return res.json(`Admin Login Error ${error}`)

    }


})
*/

/*
export const adminSendOtp = adminRouter.post("/admin-send-otp", async (req, res) => {


    const { email } = req.body
    console.log(email)
    if (!email || email === " ") {
        return res.json({
            message: "Fill the box"
        })
    }

    try {


        if (email !== process.env.ADMIN_EMAIL) {

            return res.json({ success: false, message: "Invalid Email" })
        }

        const deleteDatabaseID = adminResetPassword.findOne();

        await adminResetPassword.deleteOne(deleteDatabaseID._id)


        const emailOtp = Math.floor(100000 + Math.random() * 100000)
        const expireOtp = Date.now() + 10 * 60 * 1000


        // const mailOption = {
        //     from: process.env.SENDER_EMAIL,
        //     to: email,
        //     subject: "WELCOME TO NATIONAL FIRST TRUST.....",
        //     html: `<h3> Welcome to national first trust website.
        //          Please must enter your otp. Your otp is: ---<h1>${emailOtp}</button><h1>--- verify otp.</h3>`
        // }

        // await transport.sendMail(mailOption)
        //     .then(info => console.log("Email sent:", info.messageId))
        //     .catch(error => console.log("Error:", error));


        console.log(emailOtp, email)



        const adminDB = new adminResetPassword({ email: email, adminOtp: emailOtp, adminExpireOtp: expireOtp });

        adminDB.save()

        return res.json({
            success: true,
            message: "Otp send to your email "
        })

    }
    catch (error) {
        return res.json(`Admin send otp ${error}`)
    }
})


export const resetPassword = adminRouter.post("/reset-password", async (req, res) => {

    const { email, otp, newpassword } = req.body

    console.log(email, otp, newpassword)

    try {

        if (!email || !otp || !newpassword) {
            return res.json({
                success: false,
                message: "Fill the table"
            })
        }

        if (email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Enter valid email" })
        }
        // find in database
        const check = await adminResetPassword.findOne()

       

        if (otp !== check.adminOtp || otp === " ") {

            return res.json({ success: false, message: "invalid  otp" })
        }
        if (check.adminExpireOtp < Date.now()) {

            return res.json({ success: false, message: "Expire otp" })
        }

        const passCharacter = newpassword.length

        if (passCharacter < 6) {
            return res.json({ success: false, message: "Should be six character"})
        }

        const hashPassword = await bcrypt.hash(newpassword, 10)


        await adminResetPassword.deleteOne(check._id)

        const adminDB = new adminResetPassword({ email: email, password: hashPassword, adminOtp: "", adminExpireOtp: 0 })

        await adminDB.save()

        // const isMatch = await bcrypt.compare(newpassword, check.password)

        return res.json("Password changed Successfully")


    }
    catch (error) {
        return res.json("Error" + error)
    }
})
    */