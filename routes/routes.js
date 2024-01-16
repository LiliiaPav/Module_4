import express from 'express';
import {getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.js'

const router=express.Router();

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee);
router.route('/api/employees/:id')
    // .patch(updateEmployee)
    // .get(getEmployee)
    .delete(deleteEmployee);

export default router