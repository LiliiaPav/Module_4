import React from 'react'
import  ReactDOM  from 'react-dom'

import EmployeeList from './EmployeeList.jsx'

const contentNode= document.getElementById('content');
ReactDOM.render(
    <React.StrictMode>
    <EmployeeList />
    </React.StrictMode>
    , contentNode
    
    );