import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ClientRemoveStyle = styled.div`

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

class clientRemove extends Component {
    state = {
        client: {},
        img: " ",
        name: " ",
        location: " ",
        contact: " ",
        currentPosition: " ",
    }

    componentDidMount() {
        const clientId = this.props.match.params.clientId
        axios.get(`/api/employee/:employeeId/clients/${clientId}`).then(res => {
            console.log(res.data)
            this.setState({
                client: res.data
            })
        })
    }
    handleDelete = clientId => {
        if (this.props.match.params.clientId) {
            const clientId = this.props.match.params.clientId;
            console.log(clientId);
            axios.delete(`/api/employee/:employeeId/clients/${clientId}`)
                .then(res => {
                    this.setState({ client: res.data.client });
                    this.props.history.push(`/clients/`)
                })
        }
    }
    handleChange = (event) => {
        const client = {...this.state.client}

        const name = event.target.name
        const value = event.target.value
        client[name] = value
        this.setState({ client })
}
render() {
    return (
        <div>
<h1> {this.state.client.name} 's Portfolio njlbhjkbghk </h1>
        </div>
    )
}
}



export default clientRemove;