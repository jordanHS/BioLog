import React from "react";
import firebase from "firebase/app"

function Signin(){
    function register(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
            console.log("registration successful!");
        }).catch(function(error) {
            console.log(error.message);
        })
    };
};

return (
    <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={register}>
            <input
                type='text'
                name='email'
                placeholder='email' />
            <input
            type='password'
            name='password'
            placeholder='Password'/>    
        </form>
    </React.Fragment>
)

export default Signin