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


class clientPage extends Component {
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
                
                <h1> LIST OF CLIENTS : </h1> 

                <br></br>

                list clients here 

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
 