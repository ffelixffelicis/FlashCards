import React, { useState, useEffect, useRef } from 'react'

export default function Login() {
  
    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");

    const handleMail = (e) => {setMail(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}

    return (
        <div class="container">
        <h1 class="label">User Login</h1>
        <form class="login_form" action="App.js" method="post" name="form" onsubmit="return validated()">
            <div class="font">Email</div>
            <input autocomplete="off" type="text" name="email" onChange={handleMail} value={mail} />
            <div id="email_error">Please fill up your Email</div>
            <div class="font2">Password</div>
            <input type="password" name="password" onChange={handlePassword} value={password}/>
            <div id="pass_error">Please fill up your Password</div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

