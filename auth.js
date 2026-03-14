import { auth } from "./firebase.js"

import {

createUserWithEmailAndPassword,
signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

window.signup=async function(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

await createUserWithEmailAndPassword(auth,email,pass)

alert("Signup Successful")

}

window.login=async function(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

await signInWithEmailAndPassword(auth,email,pass)

localStorage.setItem("email",email)

window.location="skills.html"

}