import {createGlobalStyle} from "styled-components"

const GlobalStyles =createGlobalStyle `
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
    width: 0.5rem;
}
&::-webkit-scrollbar-thumb{
    background-color:#ff7667 ;
}
&::-webkit-scrollbar-track{
    background:white ;

}

body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
       // color: #fff;
        //background: black;
        color: black;
        align-items: center;
        justify-content: center;
       
    }
    a{
        text-decoration: none;
        color: #111;
        
    }
    li{
        list-style: none;
    }
    h2{
        font-size: 3rem;
        font-weight: 400;
        /* color: #fff;   */
        color: #111;  
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h3{
        font-size: 1.3rem;
        padding: 1.5rem 0;
     
    }
    p{
        font-size: 1.3rem;
        padding-bottom: 1.3rem;
    }
    button{
        
    }








`
export default GlobalStyles
