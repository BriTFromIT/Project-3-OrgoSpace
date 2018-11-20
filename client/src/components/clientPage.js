import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const ClientStyle = styled.div`

display: flex;
*{
    margin: 0;
}

    align-items: center;
justify-content: center;

h1, h3, form {
    text-algin:center;
    color: black;
    background-color: white;
    align-items: center;
}

}`


class clientPage extends Component {
    state = {
        clients: {},
        newClient: {
            img: " ",
            name: " ",
            location: " ",
            contact: " ",
            currentPosition: " ",
        }
    }
    
        getAllClients = () => {
            axios.get(`/api/employee/:employeeId/clients`).then((res) => {
                console.log(res.data)
                this.setState({ client: res.data })
            })
        }
    
        componentDidMount() {
            this.getAllClients()
        }
    
    // componentDidMount() {
    //     const employeeId = this.props.match.params.employeeId
    //     axios.get(`/api/employee/${employeeId}/clients`).then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             clients: res.data
    //             // portfolio: res.data.portfolio
    //         })
    //     })
    // }
    handleCreateNewClient = () => {
        const clientId = this.props.match.params.clientId
        const payload = {
            name: "Client's Name",
            location: "location",
            contact: "phone number",
        }
        axios.post(`/api/clients/${clientId}/porfolios`, payload).then(res => {
            const newClient = res.data
            const newStateClients = [...this.state.clients, newClient]
            this.setState({ clients: newStateClients })
        })
    }
    handleDelete = clientId => {
        axios.delete(`/api/clients/${clientId}`).then(() => {
            const newClients = [...this.state.clients]
            const filtered = newClients.filter(client => {
                return client._id !== clientId
            })
            this.setState({ clients: filtered })
        })
    }
    handleChange = (event, clientId) => {
        const { value, name } = event.target
        const newClients = [...this.state.clients]
        const updatedValue = newClients.map(client => {
            if (client._id === clientId) {
                client[name] = value
            }
            return client
        })
        this.setState({ clients: updatedValue })

    }
    handleUpdate = (clientId) => {
        const clientToUpdate = this.state.clients.find(client => {
            return client._id === clientId
        })
        axios.patch(`/api/clients/${clientId}`, clientToUpdate).then(() => {
            console.log("Your Client Has Been Updated!")
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/clients', this.state.newClient).then(res => {
            console.log(res.data)
            this.props.history.push(`/clients/${res.data._id}`)
        })
    }



    render() {
        return (

            <div>

                <h1> LIST OF CLIENTS : </h1>

                <br></br>

                <div>
                    {this.state.clients.name}
                    {/* {this.state.clients.map(client => {
                        <div key={client._id}>
                            {client.name}
                        </div> */}

                    {/* })} */}

                </div>

                <br></br>
                <br></br>


                <Link to='/employee'><button> Home </button></Link>
                <br></br>
                <br></br>
                <Link to='/clients/clientnew'><button> Create New Client </button></Link>
            </div>
        );
    }
}


export default clientPage;
