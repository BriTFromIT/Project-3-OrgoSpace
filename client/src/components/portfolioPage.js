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
    
    render() {
        return (
            <ProfileStyle> 
            <div>
                

                    {this.state.portfolioFiles.map((portfolio) => (
                        <div key={portfolio._id}>
                           <Link to={`portfolios/${portfolio._id}`}> {portfolio.name}</Link> 
                            {portfolio.location}
                            {portfolio.contact}
                        </div>


                    ))}


            </div>
            </ProfileStyle>
        );
    }
}

export default portfolioPage;