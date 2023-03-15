import React from "react";
import {useState} from "react";
import HeroImage from './pizzza.jpg';
import '../styles/Contact.css';

export default function Contact(props){
 const [username, setUsername] =useState("");
 const[email, setEmail] =useState("");
 const[fname, setFname] =useState("");
 const[message, setMessage] =useState("");

 const handleChange=(e)=>{
    setUsername(e.target.value);
    console.log(username);
 }
 const handleEmailChange=(e)=>{
    setEmail(e.target.value);
    console.log(email);
 }
  const handleMessageChange=(e)=>{ 
    setMessage(e.target.value);
    console.log(message);
  }

  const handleFnameChange=(e)=>{
    setFname(e.target.value);
    console.log(fname)
  }

  function handleSubmit(event){
    event.preventDefault();
   console.log("Form Data:"+ fname,email, message ) ;
  }

    return(
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage:`url(${HeroImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>

                <form id="contact-form" method="POST" onSubmit={(event)=>{handleSubmit(event)}}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Enter Full Name" required value={fname} onChange={(e) => {handleFnameChange(e)}} />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email"  required value={email} onChange = {(e) => {handleEmailChange(e)}} />
                   
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="6" placeholder="Enter Message" required value={message} onChange={(e)=>{handleMessageChange(e)}} ></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}
