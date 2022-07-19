import React, { useState } from 'react'
import Style from './FormVal.css'

export const FormVal = () =>{
    
        const initialValue = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

const [formValues, setFormValues] = useState(initialValue);

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit ,setIsSubmit] = useState(false);


    const handleUserInputChange = (e) => {
        setFormValues({...formValues, [e.target.id]: e.target.value });
        console.log(formValues)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log("submitted")

    }

    const validate=(formValues)=>{
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //validating username
        if(formValues.username==''){
            errors.username = 'Please enter username';
    }
       
        //validating email
        if(formValues.email===''){
            errors.email = 'Please enter email'
        }
        else if(!(regex.test(formValues.email))){
            errors.email = 'Please enter valid email id'
        }
       // validating password
        if(formValues.password===''){
            errors.password = 'Please enter password';
        }
        else if(formValues.password.length < 8){
            errors.password = 'Password must have atleast 8 characters'
        }
        //validating confirm password
        if(formValues.password !== formValues.confirmPassword){
            errors.confirmPassword = 'Passwords do no match'
        }
       return errors;  
    }

    // const userNameValidator = () => {
    //     if(signUpValidation.username === ""){
    //         setSignupValidationError({...signUpValidationerror, usernameError: "Please enter username"})
    //     } 
    //     else if(signUpValidation.username.length < 6){
    //         setSignupValidationError({...signUpValidationerror, usernameError: "username must be atleast 6 characters"})
    //     } 
    //     else if(signUpValidation.username.length >10){
    //         setSignupValidationError({...signUpValidationerror, usernameError: "username must be less then 10 characters"})
    //     }
    //     else{
    //         setSignupValidationError(initialErrorValue);
    //     }
    // }

    // const emailValidator = () => {
    //     // should not be empty
    //     // should have @ symbol ---> searching
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     if(signUpValidation.email === ""){
    //         setSignupValidationError({...signUpValidationerror, emailError: "Please enter email"})
    //     } else if(!(regex.test(signUpValidation.email))){
    //         setSignupValidationError({...signUpValidationerror, emailError: "Invalid email"})
    //     } else{
    //         setSignupValidationError(initialErrorValue)
    //     }
    // }
    // const passwordValidator = () => {
    //     if(signUpValidation.password === ""){
    //         setSignupValidationError({...signUpValidationerror, passwordError: "Please enter password"})
    //     } else if(signUpValidation.password.length < 8){
    //         setSignupValidationError({...signUpValidationerror, passwordError: "Password must be atleast 8 characters"})
    //     } else{
    //         setSignupValidationError(initialErrorValue)
    //     }
    // }

    // Password validator
    // should not be empty
    // min lemgth & max length
    // should be same as password --> confirm password
    
 return (
    <>
    <form className= "container" onSubmit={submitHandler}>

        <h1><i>LOGIN FORM</i></h1>

        <label htmlFor="username">User Name:</label>
        <input type="text" 
        id="username"
        placeholder='username'
        value={formValues.username}
        onChange={(e) => handleUserInputChange(e)}
        onBlur={validate}
        />

       <div className="error">{formErrors.username}</div>

        <label htmlFor="email">Email: </label>
        <input type="text" 
        id="email"
        placeholder='email'
        value={formValues.email}
        onChange={handleUserInputChange}/>

        <div className="error">{formErrors.email}</div>

        <label htmlFor="password">Password: </label>
        <input type="password" 
        id="password"
        value={formValues.password}
        placeholder='password'
        onChange={handleUserInputChange}/>

        <div className="error">{formErrors.password}</div>

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password" 
        id="confirmPassword"
        value={formValues.confirmPassword}
        placeholder='confirm password'
        onChange={ handleUserInputChange}/>

        <div className="error">{formErrors.confirmPassword}</div>
        <br/>
        <button>Sign Up</button>
    </form>
     <div className='messContainer'>
    {Object.keys(formErrors).length===0 && isSubmit ? (<div className='message'>Signed in Successfully</div>): <pre className='message'><h2>PREVIEW</h2>{JSON.stringify(formValues,undefined ,2)}</pre>}
    </div>
    </>
  )
}

