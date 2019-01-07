import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// ***** THIS PAGE WILL SHOW THE EMPLOYEE'S PAGE - SHOW INFO FOR:
//IMG
//USERNAME
//LOCATION


// THIS PAGE WILL SHOW THE BUTTON TO NAVIGATE TO CLIENT'S PAGE



const EmployeeStyle = styled.div`

display: flex;
*{
    margin: 0;
}

    align-items: center;
justify-content: center;

h1, form {
    text-algin:center;
    color: black;
    align-items: center;
    border: solid;
}


}`


// Create a button that will take you to the Clients page 

class employeePage extends Component {
    state = {
        employees: [],
        employeeUpdate: {
            username: " ",
            location: " ",
        }
    }
    handleChange = (event) => {
        const updatedEmployee = {...this.state.employeeUpdate}

        updatedEmployee[event.target.name] = event.target.value
        this.setState({ employeeUpdate: updatedEmployee })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/employee', this.state.employeeUpdate).then(res => {
            console.log(res.data)
            this.props.history.push(`/employee/${res.data._id}`)
        })
    }

    getAllEmployee = () => {
        axios.get(`/api/employee`).then((res) => {
            console.log(res.data)
            this.setState({ employees: res.data })
        })
    }

    componentDidMount() {
        this.getAllEmployee()
    }

    render() {
        return (
            <EmployeeStyle>
                <div>
                    {this.state.employees.map((employee) => (
                        <div key={employee._id}>
                            {employee.username} <br />
                            {employee.location}
                            <br />
                            <Link to='/employee/:employeeId'> <button> Update Info </button></Link>
                            <Link to={`/${employee._id}/clients`}><button> Clients </button> </Link>
                            <Link to='/employee'><button> Home </button></Link>
                        </div>
                    ))}
                  
                </div>
            </EmployeeStyle>
        );
    }
}

export default employeePage;



