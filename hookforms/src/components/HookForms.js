import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            if(firstname.length < 2){
                return "First name should be at least 2 characters!";
            }
            if(lastname.length < 2){
                return "Last name should be at least 2 characters!";
            }
            if(email.length <5){
                return "Email should be at least 5 characters!";
            }
            if(password.length <8){
                return "Password should be at least 8 characters!";
            }
            if(password !== confirmpassword){
                return "Password should match the Password Confirmation!";
            }
        }
    };
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h3>{ formMessage() }</h3><br></br>
        <p>Your Form Data:  </p><br></br>
        <p>Firstname : { firstname }</p>
        <p>Lastname : { lastname }</p>
        <p>Email: { email }</p>
        <p>Password: { password }</p>
        <p>Confirmed Password: { confirmpassword }</p>
        </>
    );
};    
export default UserForm;