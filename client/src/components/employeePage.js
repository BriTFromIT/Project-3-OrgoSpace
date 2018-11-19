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
            // img: " ",
            username: "Diamond Danner ",
            location: " Atlanta, GA ",
                }
    
    componentDidMount() {
        const employeeId = this.props.match.params.username
        axios.get(`/api/employee/${employeeId}`).then(res => {
            console.log(res.data)
            // this.setState({
            //     employee: res.data,
            //     clients: res.data.clients
            // })
        })
    }


    render() {
        return (
            <EmployeeStyle>
                <div>
                    <h1> Welcome Back, {this.state.username} !</h1>
                    <br></br>
                    <h3> Employee Info: </h3>

                     {/* Photo: {this.state.img} */}
                     <br></br>
                     Name: {this.state.username}
                     <br></br>
                     Location:   {this.state.location}
                     <br></br> 
                     <br></br>
                    <Link to='/clients'><button> Clients </button> </Link>
                   <Link to='/employee'><button> Home </button></Link> 
                    <button> Update Employee Profile </button>
                </div>
            </EmployeeStyle>
        );
    }
}

export default employeePage;



