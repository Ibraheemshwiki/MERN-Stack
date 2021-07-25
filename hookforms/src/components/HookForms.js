import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [fnameError, setFNameerror]=useState("");  
    const [lnameError, setLNameerror]=useState("");  
    const [emailError, setEmailerror]=useState("");  
    const [PassError, setPasserror]=useState("");  
    const [PassConfError, setConferror]=useState("");  


    const firstNameHandler =(e)=>{
        setFirstname(e.target.value);
        if (e.target.value.length===0){
            setFNameerror("")
        }
        else if(e.target.value.length < 2){
            setFNameerror("First name should be at least 2 characters!") ;
        }
        else{
            setFNameerror("")
        }
        
    }
    const lastNameHandler =(e)=>{
        setLastname(e.target.value);
        if (e.target.value.length===0){
            setLNameerror("")
        }
        else if(e.target.value.length < 2){
            setLNameerror("Last name should be at least 2 characters!") ;
        }
        else{
            setLNameerror("")
        }
        
    }
    const emailHandler =(e)=>{
        setEmail(e.target.value);
        if (e.target.value.length===0){
            setEmailerror("")
        }
        else if(e.target.value.length < 5){
            setEmailerror("Email should be at least 5 characters!") ;
        }
        else{
            setEmailerror("")
        }
        
    }
    const passHandler =(e)=>{
        setPassword(e.target.value);
        if (e.target.value.length===0){
            setPasserror("")
        }
        else if(e.target.value.length < 8){
            setPasserror("Password should be at least 8 characters!") ;
        }
        else{
            setPasserror("")
        }
        
    }
    const passConfHandler =(e)=>{
        setConfirmPassword(e.target.value);
        if (e.target.value.length===0){
            setConferror("")
        }
        else if(e.target.value !== password){
            setConferror("Password should match the Password Confirmation!") ;
        }
        else{
            setConferror("")
        }
        
    }
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => firstNameHandler(e) } />
                <br></br>
                {fnameError}
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => lastNameHandler(e) } />
                <br></br>
                {lnameError}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => emailHandler(e) } />
                <br></br>
                {emailError}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => passHandler(e) } />
                <br></br>
                {PassError}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => passConfHandler(e) } />
                <br></br>
                {PassConfError}
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>Your Form Data:  </p>
        <p>Firstname : { firstname }</p>
        <p>Lastname : { lastname }</p>
        <p>Email: { email }</p>
        <p>Password: { password }</p>
        <p>Confirmed Password: { confirmpassword }</p>
        </>
    );
};    
export default UserForm;