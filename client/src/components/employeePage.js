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
        employees: []
    }

    getAllClients = () => {
        axios.get(`/api/employee`).then((res) => {
            console.log(res.data)
            this.setState({ employees: res.data })
        })
    }

    componentDidMount() {
        this.getAllClients()
    }

    render() {
        return (
            <EmployeeStyle>
                <div>
                    {this.state.employees.map((employee) => (
                        <div key={employee._id}>
                            {employee.username} <br />
                            {employee.location}
                        </div>
                    ))}

                    <Link to='/clients'><button> Clients </button> </Link>
                    <Link to='/employee'><button> Home </button></Link>
                    <button> Update Employee Profile </button>
                </div>
            </EmployeeStyle>
        );
    }
}

export default employeePage;



