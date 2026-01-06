import nodemailer from "nodemailer";
import Form from "./../models/contactForm.js";

// this just sends message to the form data submitter about his message being received
async function sendEmail(savedData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "deeprodeveloper@gmail.com",
      pass: process.env.GOOGLE_APP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: '"APSS LAB" <deeprodeveloper@gmail.com>',
    to: `${savedData.email}`,
    subject: "Message Received",
    html: `
      <p>Hello, ${savedData.name}. Thank you for reaching out. Your message has been received successfully.</p>
      <p>Regards,<br>APSS LAB TEAM</p>
    `,
  });

  console.log("Email sent:", info.messageId);
}

export const contactFormController = async(req,res) => {
    try{
        const { name, email, subject, message } = req.body;
        const data = new Form({ name, email, subject, message });
        const savedData = await data.save();
        console.log("Data saved")
        console.log(savedData)
        sendEmail(savedData);
;        res.status(201).json(savedData);


    }catch(error){
        console.error("Error in contactFormController", error);
        res.status(500).json({message: "Internal servor error"});
    }
}