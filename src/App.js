import React from 'react'
import Header from "./components/header/Heade"
import GlobalStyle from "./components/GlobalStyle"
import SignIn from "./components/SignIn"
import {auth} from "./firebase"
import {useAuthState} from "react-firebase-hooks/auth"


const App = () => {
  const [user] =useAuthState(auth)
  console.log(user);
  return (
    <div>
      <GlobalStyle/>
      <Header auth={auth} user={user} />
      <section>
        { user ? <div> hello</div> : <SignIn auth={auth}/>}
      </section>
    </div>
  )
}

export default App
