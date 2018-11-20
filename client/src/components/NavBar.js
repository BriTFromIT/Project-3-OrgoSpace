import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
*{
   margin: 0;
}
display: flex;
padding: 10px;
justify-content: space-around;
background: turquoise;
font-weight: 800;
border: solid;
color: black;
font-size: 25px;
margin: 0;

a{
   text-decoration: none;
}
a:visited{
   color: black;
}
a:hover{
   color: white;
}

`



class NavBar extends Component {
   render() {
     return (
       <NavBarStyles>
           <div>
         <Link to="/"> 🏠 Home </Link>
         <Link to="/clients"> 🕺🏿 Clients </Link>



         </div>

        </NavBarStyles>
     );
   }
 }

 export default NavBar;