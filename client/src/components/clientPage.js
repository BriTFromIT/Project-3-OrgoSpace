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
        clientProfiles: [],

    }

    getAllPortfolios = () => {
        const employeeId = this.props.match.params.employeeId
        axios.get(`/api/employee/${employeeId}/clients`).then((res) => {
            console.log(res.data)
            this.setState({ clientProfiles: res.data })
        })
    }

    componentDidMount() {
        this.getAllPortfolios()
    }

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

    render() {
        return (
            <ClientStyle>
                <div>

                    <h1> All Clients: </h1>

                    {this.state.clientProfiles.map((client) => (
                        <div key={client._id}>
                           <Link to={`clients/${client._id}`}> {client.name}</Link> 
                            {client.location}
                            {client.contact}
                        </div>


                    ))}
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
