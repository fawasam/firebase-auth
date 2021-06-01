import React from 'react'
import Google from "../assets/search.png"
import Github from "../assets/github.png"
import Facebook from "../assets/facebook.png"
import styled from 'styled-components'
import {Button} from "./Style"


import firebase from "firebase/app"
import "firebase/auth"

const SignIn = ({auth}) => {

    const signInWithGoogle = (e)=>{
        e.preventDefault()
        const provider =new firebase.auth.GoogleAuthProvider()

        auth.signInWithPopup(provider)
        // console.log(provider);
    }
    const signInWithGithub = (e) =>{
        e.preventDefault()
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
        firebase.auth().signInWithRedirect(provider);
    }
    return (
        <div>
    
            <Button onClick={signInWithGoogle}>
               <img src={Google}  alt="imggoogle" />
               <span>Sign in with Google</span> 
            </Button>
            <Signin onClick={signInWithGithub}>
               <img src={Github}  alt="imggoogle" />
               <span>Sign in with Github</span> 
            </Signin>
            <Signin3>
               <img src={Facebook} alt="imggoogle" />
               <span>Sign in with Facebook</span> 
            </Signin3>
            
        </div>
    )
}

const Signin =styled(Button) ` 
top:62%;

`
const Signin3 =styled(Button) ` 
top:74%;
padding:15px 18px;

`


export default SignIn
