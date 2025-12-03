import Form from "./../models/contactForm.js";

export const contactFormController = async(req,res) => {
    try{
        const { name, email, subject, message } = req.body;
        const data = new Form({ name, email, subject, message });
        const savedData = await data.save();
        console.log("Data saved")
        console.log(savedData)
;        res.status(201).json(savedData);
    }catch(error){
        console.error("Error in contactFormController", error);
        res.status(500).json({message: "Internal servor error"});
    }
}