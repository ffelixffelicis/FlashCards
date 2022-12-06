import React, { useState, useEffect, useRef, useSelector } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";
import {signIn} from "./firebase";
import Main from "./main";
import { applyActionCode } from "firebase/auth";
import Login from "./login";
import { async } from "@firebase/util";

const App = () => {
  const[isLogin,setIsLogin] = useState(false) 
  const [mail,setMail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  
  const handleMail = (e) => {setMail(e.target.value)}
  const handlePassword = (e) => {setPassword(e.target.value)}
  const handleSubmit = async(e) => {
    e.preventDefault(); 
    signIn(mail, password)
    .then(() => {console.log("başarılı");setIsLogin(true)}
    ) 
    .catch((e) => {console.log(e)})
  
    setMail("");
    setPassword("");
    const res=await signIn(mail,password);
    if(res.error) setError(res.error);
  } 
  
  return(
    <>
    {
      isLogin?(<Main></Main>):(<div className="container">
      <h1 className="label">User Login</h1>
      <form className="login_form" action="App.js" method="post" name="form" onSubmit={handleSubmit}>
          <div className="font">Email</div>
          <input autoComplete="off" type="text" name="email" onChange={handleMail} value={mail} />
          <div id="email_error">Please fill up your Email</div>
          <div className="font2">Password</div>
          <input type="password" name="password" onChange={handlePassword} value={password}/>
          <div id="pass_error">Please fill up your Password</div>
          <button type="submit">Login</button>
      </form>
  </div>)
    }
    </>
  )
  

}
 export default App;



