import React, { useState } from 'react'
import { redirect } from "react-router-dom";
import './login.scss';

const Login = () =>  {

  const errors = {
    email:"",
    password:""
  };
const [ userData, setUserData] = useState();
console.log(userData)
const [email, setEmail] = useState('');
const [userpassword, setUserpassword] = useState('');
const [inputError, setInputError] = useState(errors);



const onUserSubmit = async (e) => {
    e.preventDefault();

    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": email,
          "password": userpassword
        });
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://jobs-api.squareboat.info/api/v1/auth/login", requestOptions)
          .then(response => response.text())
          .then(result => {
            setUserData(JSON.parse(result));
          })
          .catch(error => console.log('error', error));
          if(userData.data.token){
            window.localStorage.setItem('auth Token', userData.data.token);
            return redirect("/");
          }

    }catch(e){
        console.log('Error logging in', e);
    }
   console.log("onUserSubmit", userpassword, email);
}

    return (
        <>
        <div className="loginpage">
        <div className="loginpage__logincontainer">
        <div className="loginpage__logincontainer__heading">Login</div>
           <form action="" onSubmit={onUserSubmit}>
            <div className="loginpage__logincontainer__inputContainer">
            <label htmlFor="user_email">Email Address</label>
               <input type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="LoginInput"
               id='user_email'
               placeholder="Enter your Email"
               />
               {inputError?.email !== '' ? <div className="inputError">invalid email</div> : <></>}
               
            </div>
            <div className="loginpage__logincontainer__inputContainer">
            <label htmlFor="user_password">Password</label>
               <input type="password"
               id='user_password'
                 value={userpassword}
                 onChange={(e) => setUserpassword(e.target.value)}
               className="LoginInput"/>
               {inputError?.password !== '' ? <div className="inputError">invalid password</div> : <></>}
            </div>
            <div className="logincontainer">
               <button type="submit" className="LoginSubmit">Login</button>

            </div>
           </form>
        </div>
       </div>
        </>
    );
};

Login.displayName = 'Login';
export default Login;
