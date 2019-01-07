import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ClientStyle = styled.div`

display: flex;
*{
    margin: 0;
}

    align-items: center;
justify-content: center;

h1, form {
    text-algin:center;
    color: black;
    background-color: white;
    align-items: center;
}
h3 {
    color: blue;
    
}

}`


class clientList extends Component {
    state = {
        clients: [],
        newClient: {
            img: " ",
            name: " ",
            location: " ",
            contact: " ",
            currentPosition: " ",
        }
    }
    getAllClients = () => {
        axios.get('/api/employee/:employeeId/clients').then((res) => {
            this.setState({ clients: res.data })
        })
    }
    componentDidMount() {
        this.getAllClients();
    }
    // handleCreateNewClient = () => {
    //     const employeeId = this.props.match.params.employeeId
    //     const payload = {
    //         img: this.state.img,
    //         name: this.state.name,
    //         location: this.state.location,
    //         contact: this.state.contact,
    //         currentPosition: this.state.currentPosition
    //     }
    //     axios.post(`/api/employee/${employeeId}/clients/`, payload).then(res => {
    //        console.log('Client created! ')
    //     })
    // }
    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewClient = { ...this.state.newClient }
        updatedNewClient[event.target.name] = event.target.value
        this.setState({ newClient: updatedNewClient })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const employeeId = this.props.match.params.employeeId
        const payload = {
            img: this.state.newClient.img,
            name: this.state.newClient.name,
            location: this.state.newClient.location,
            contact: this.state.newClient.contact,
            currentPosition: this.state.newClient.currentPosition
        }
        axios.post(`/api/employee/${employeeId}/clients/clientConfirm`, payload).then(res => {
            console.log('Hit!')
            console.log(res.data)
            this.props.history.push(`/${employeeId}/clients/`)
        })

    }



    render() {
        return (



            <ClientStyle>


                <h3> Create New Client </h3>
                <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name"> Client Name: </label>
                            <input onChange={this.handleChange} value={this.state.newClient.name} type="text" name="name" />
                        </div>

                        <div>
                            <label htmlFor="location"> Client Location: </label>
                            <input onChange={this.handleChange} value={this.state.newClient.location} type="text" name="location" />
                        </div>

                        <div>
                            <label htmlFor="contact"> Client Contact: </label>
                            <input onChange={this.handleChange} value={this.state.newClient.contact} type="text" name="contact" />
                        </div>

                        <div>
                            <label htmlFor="currentPosition"> Client Desired Position: </label>
                            <input onChange={this.handleChange} value={this.state.newClient.currentPosition} type="text" name="currentPosition" />
                        </div>
                        <br />
                        <button type="submit"> Client Created </button>

                    </form>
                </div>
                {/* <Link to='/clients'><button> Clients </button> </Link>
                <Link to='/employee'><button> Home </button></Link> */}

            </ClientStyle>       
            
    );

    }
}

export default clientList;