let express = require('express');
let nodemailer = require('nodemailer');

const contactRouting = express.Router();

contactRouting.post("/contact",async(req,res)=>{
    const {yName,mobile,email,enquiryType,specialRequest} = req.body;
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        await transporter.verify(); //catches auth errors early
        const mailOptions = {
            from: `"Hospital Website" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: `New Contact - ${enquiryType}`,
            html: `
            <h2>New Contact Form Submission</h2>
        <hr />
        <p><strong>Name:</strong> ${yName}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        <p><strong>Special Request:</strong></p>
        <p>${specialRequest}</p>`
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Message Sent Successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Email sending failed" });
    }
});
 
module.exports = contactRouting;
