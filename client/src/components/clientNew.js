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

h1, h3, form {
    text-algin:center;
    color: black;
    background-color: white;
    align-items: center;
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
    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewClient = {...this.state.newClient}
        updatedNewClient [event.target.name] = event.target.value
        this.setState({ newClient: updatedNewClient })
    }

    handleSubmit = (event) => {

        event.preventDefault()

        axios.post('/api/clients', this.state.newClient).then(res => {
            console.log(res.data)
            this.props.history.push(`/clients/${res.data._id}`)
        })
    }

    getAllClients = () => {
        axios.get('/api/clients').then((res) => {
            this.setState({ clients: res.data })
        })
    }
    componentDidMount() {
        this.getAllClients()
    }

    render() {
        return (

            <div>
            <ClientStyle>
                <div><h1> *** ORGOSPACE *** HOMEPAGE *** </h1> 
                
                <h3> Create New Client </h3>
                    
                    <form onSubmit={this.handleChange.Submit}>
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
                        <button type="submit"> Client Created </button>

                    </form> </div>


            </ClientStyle>



  <Link to='/employee'><button> Home </button></Link> 
  
      </div>     
            
        );
    }
}

export default clientList;