import React from "react";
import firebase from "firebase/app";

function Registration() {
    function register(event){
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            alert("Registration succcesful!");
        }).catch(function(error){
           alert(error.message);
        })
    }

return(
    <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={register}>
            <input
                type='text'
                name='email'
                placeholder='email'/>
            <input
                type='password'
                name='password'
                placeholder='Password'/>
            <button type="submit">Register</button>
        </form>
    </React.Fragment>
)
}

export default Registration;