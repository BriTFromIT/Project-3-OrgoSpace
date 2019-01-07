import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileStyle = styled.div`
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

}

`

class portfolioPage extends Component {
    state = {
        portfolioFiles: {
            img: '',
     clientName: '',
     location: '',
     desiredPosition: '',
     desiredSalary: Number,

     resume: '',
     coverLetter: '',
     brandStatement: '',
     
        }
    }


    componentDidMount() {
        const portfolioId = this.props.match.params.portfolioId
        const employeeId = this.props.match.params.employeeId
        const clientId = this.props.match.params.clientId
        axios.get(`/api/employee/${employeeId}/clients/${clientId}/portfolios/`).then((res) => {
            console.log("response",res.data.portfolioFiles)
            this.setState({ portfolioFiles: res.data })
        })
    }

    render() {
        return (
            <ProfileStyle>
                <div>
                    PORTFOLIO PROFILE:

{this.state.portfolioFiles.clientName}







                </div>
            </ProfileStyle >
        );
    }
}

export default portfolioPage;