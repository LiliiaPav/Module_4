import Employee from "../models/Employee.js";


const getAllEmployees = async (req, res) =>{
    try {
        const employees = await Employee.find({})
        res.status(200).json({employees, count: employees.length})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getEmployee = async (req, res) =>{
    try {
        let {id:employeeID} = req.params;
        const employee = await Employee.findOne({_id: employeeID})
        res.status(200).json({employee})
        if (!employee){
            return res.status(404).json({msg: `No employee with ID ${employeeID} found`})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateEmployee = async (req, res) =>{
    try {
        let {id:employeeID} = req.params;
        const employee = await Employee.findOneAndUpdate({_id: employeeID}, req.body, {new: true, runValidators: true});
        if (!employee){
            return res.status(404).json({msg: `No employee with ID ${employeeID} found`})
        }
        res.status(200).json({msg: 'Updated'})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createEmployee = async (req, res) =>{
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json({employee})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const deleteEmployee = async (req, res) =>{
    try {
        let {id:employeeID} = req.params;
        const employee = await Employee.findOneAndDelete({_id: employeeID})
        res.status(200).json({msg: 'Deleted'})
        if (!employee){
            return res.status(404).json({msg: `No employee with ID ${employeeID} found`})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

export {getAllEmployees, 
getEmployee,
createEmployee,
updateEmployee,
deleteEmployee};