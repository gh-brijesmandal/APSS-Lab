import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    subject: {
        type: String,
        required: true,
        enum: ['Research Inquiry','Summer Camp','Outreach Inquiry','Collaboration','Other']
    },
    message: {
        type: String,
        required: true, 
        minLength: 1,
        trim: true,
    }
}, {
    timestamps: true
});

const Form = mongoose.model("Form",formSchema);
export default Form;