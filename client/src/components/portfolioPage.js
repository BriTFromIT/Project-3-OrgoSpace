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
        portfolioFiles: [],
    }
    getAllPort = () => {
        const portfolioId = this.props.match.params.portfolioId
        axios.get(`/portfolios/${portfolioId}`).then((res) => {
            console.log(res.data.portfolioFiles)
            this.setState({ portfolioFiles: res.data })
        })
    }

    componentDidMount() {
        this.getAllPort()
    }
    
    render() {
        return (
            <ProfileStyle> 
            <div>
                PORTFOLIO PROFILE:

                    {this.state.portfolioFiles.map((portfolio) => (
                        <div key={portfolio._id}>
                        {console.log(portfolio)}
                        {portfolio.clientName}
                        {portfolio.location}
                        {portfolio.desiredPosition}
                        {portfolio.desiredSalary}
                        {portfolio.resume}
                        {portfolio.coverLetter}
                            
                        </div>


                    ))}


            </div>
            </ProfileStyle>
        );
    }
}

export default portfolioPage;