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
        clients: [],
        clientProfiles: [],

    }

    getAllPortfolios = () => {
        axios.get(`/api/employee/:employeeId/clients/:clientId`).then((res) => {
            console.log(res.data)
            this.setState({ clients: res.data })
        })
    }

    componentDidMount() {
        this.getAllPortfolios()
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

    // handleCreateNewClient = () => {
    //     const clientId = this.props.match.params.clientId
    //     const payload = {
    //         name: "Client's Name",
    //         location: "location",
    //         contact: "phone number",
    //     }
    //     axios.post(`/api/employee/:employeeId/clients/${clientId}/porfolios`, payload).then(res => {
    //         const newClient = res.data
    //         const newStateClients = [...this.state.clients, newClient]
    //         this.setState({ clients: newStateClients })
    //     })
    // }
    handleDelete = clientId => {
        axios.delete(`/api/employee/:employeeId/clients/${clientId}`).then(() => {
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
    // handleUpdate = (clientId) => {
    //     const clientToUpdate = this.state.clients.find(client => {
    //         return client._id === clientId
    //     })
    //     axios.patch(`/api/employee/:employeeId/clients/${clientId}`, clientToUpdate).then(() => {
    //         console.log("Your Client Has Been Updated!")
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault()

    //     axios.post('/api/employee/clients', this.state.newClient).then(res => {
    //         console.log(res.data)
    //         this.props.history.push(`/clients/${res.data._id}`)
    //     })
    // }



    render() {
        return (
            <ClientStyle>
                <div>

                    <h1> All Clients: </h1>

                    {/* {this.state.clients.map((client) => {
                        <div key={client._id}>
                            {client.name}
                            {client.location}
                            {client.contact}
                        </div>


                    })} */}
                    <div>


                    </div>

                    <br></br>
                    <br></br>


                    <Link to='/employee'><button> Home </button></Link>
                    <br></br>
                    <br></br>
                    <Link to='/clients/clientnew'><button> Create New Client </button></Link>
                </div>
            </ClientStyle>
        );
    }
}


export default clientPage;
