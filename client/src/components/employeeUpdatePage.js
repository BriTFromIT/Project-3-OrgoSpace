import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class employeeUpdatePage extends Component {
    state = {

    }

    getAllEmployee = () => {
        axios.get(`/api/employee/:employeeId/clients/:clientId`).then((res) => {
            console.log(res.data)
            this.setState({ clients: res.data })
        })
    }

    componentDidMount() {
        this.getAllEmployee()
    }
    render() {
        return (
            <div>
                Info Updated!
            </div>
        );
    }
}

export default employeeUpdatePage;