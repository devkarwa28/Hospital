let express = require('express');
const { Resend } = require("resend");

const contactRouting = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

contactRouting.post("/contact",async(req,res)=>{
    const {yName,mobile,email,enquiryType,specialRequest} = req.body;
    try{
        
        await resend.emails.send({
            from: "Hospital Website <onboarding@resend.dev>",
            to: ["devkarwa1973@outlook.com"],
            replyTo: email,
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
        });

        await resend.emails.send({
      from: "Hospital Support <onboarding@resend.dev>",
      to: [email], // user's email
      subject: "Thank you for contacting Hospital",
      html: `
        <h2>Thank You, ${yName}!</h2>
        <p>We have received your message.</p>

        <p>
          Our team will contact you shortly regarding your
          <strong>${enquiryType}</strong>.
        </p>

        <hr/>

        <p>
          Regards,<br/>
          <strong>Hospital Support Team</strong><br/>
          📞 +91-7611077344<br/>
          📧 devkarwa1973@outlook.com
        </p>
      `,
    });
        res.status(200).json({message: "Message Sent Successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "Email sending failed" });
    }
});
 
module.exports = contactRouting;
