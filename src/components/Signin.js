import React from "react";
import firebase from "firebase/app";

function Signin(){
    function logIn(event) {
        event.preventDefault();
        const email = event.target.signinEmail.value;
        const password = event.target.signinPassword.value;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
            alert("log-in successful!");
        }).catch(function(error) {
            alert(error.message)
        });
    }

    function logOut() {
        firebase.auth().signOut().then(function() {
            console.log("Log out successful!");
        }).catch(function(error){
            console.log(error.message);
        })
    }

return (
    <React.Fragment>
        <h1>Log-in</h1>
        <form onSubmit={logIn}>
            <input
                type='text'
                name='signinEmail'
                placeholder='email'/>
            <input
                type='password'
                name='signinPassword'
                placeholder='Password'/>
            <button type='submit'>Log in</button>    
        </form>
        <h1>Log Out</h1>
        <button onClick={logOut}>Log Out</button>
    </React.Fragment>
)
}
export default Signin