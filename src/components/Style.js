//styled component
import styled from "styled-components"

export const Button =styled.button `
display: flex;
cursor: pointer;
background-color: rgb(243, 243, 243);
align-items: center;
justify-content: space-around;
border: none;
border-radius: 10px;
position: absolute;
top: 50%;
left: 50%;
padding:15px 30px;
transform: translate(-50%,-50%);
transition:0.5s;
&:hover{
 background-color :#ffecec ;
}
img{
    width: 40px;
    height: 40px;
    margin-right: 20px; 
}
span{
    font-weight: lighter;
    font-size: 1.2rem;
}
`