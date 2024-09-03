import './entry-style.css';
import React,{useState} from 'react';
import {LoginForm} from "../components/login/login component";
import { PasswordReset } from "../components/login/password-reset";
const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Formload, setFormload] = useState("login");


const handleOnchange = (e) => {
  const{name , value} = e.target;

  switch(name){
    case 'email' :
      setEmail(value);
      break;
      case 'password' :
        setPassword(value);
        break;
    default:
      break;
  }
  // console.log( name, value);

};
const handleOnsubmit = (e) => {
  e.preventDefault();
  if(!email || !password){
    return alert("Please fill all the input fields")
  }
  //Call the API to submit the form 
  console.log(email,password);
};
const handleOnResetsubmit = (e) => {
  e.preventDefault();
  if(!email){
    return alert("Please fill the input field")
  }
  //Call the API to submit the form 
  console.log(email);
};
const FormSwitcher = (frmType) => {
  setFormload(frmType);
};
  return (
  <div className='entry-page'>
    {Formload ==='login' && <LoginForm handleOnchange={handleOnchange} handleOnsubmit={handleOnsubmit} FormSwitcher={FormSwitcher} email={email} pass={password}/>}
    {Formload ==='reset' && <PasswordReset handleOnchange={handleOnchange} handleOnResetsubmit={handleOnResetsubmit} FormSwitcher={FormSwitcher}  email={email}/>}
    </div>
  );
}


export default Entry
