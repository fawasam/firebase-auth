import React from 'react'
import styled from 'styled-components'

const Header = ({auth,user}) => {
    return (
        <div>
           <Nav>
           
               <a className="logo" href="/">LOGO</a>
               <ul>
                   <li><a href="/">Home</a></li>
                   { user ? <li><a href="/" onClick={()=> auth.signOut()}>Sign Out</a></li> : <li><a href="/">Sign In</a></li> }
               </ul>
              

           </Nav>
            
        </div>
    )
}

const Nav =styled.div `  
width: 100%;
padding: 100px;
/* max-width: 728px; */
/* position: fixed; */
display: flex;
align-items: center;
justify-content: space-between;

 
 .logo{
    font-size: 1.2rem;
    font-weight: bold;
 }
 ul{
     display: flex;
     li{
         margin-left: 20px;
     }
 }

`

export default Header
