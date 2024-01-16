import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name required"]},
    extension: {type: Number, required: [true, "Extention required"]},
    email: {type: String, required: [true, "Email is required"]},
    title: {type: String, required: [true, "Title is required"]},
    dateHired: {type: Date, default: Date.now},
    currentlyEmployed: {type: Boolean, default: true}
})

export default mongoose.model('Employee', EmployeeSchema);