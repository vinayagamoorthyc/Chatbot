import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8FMugbQLpl89f0qFMb_Ge3-xstO1QCxQ",
  authDomain: "chatbot-auth-7d520.firebaseapp.com",
  projectId: "chatbot-auth-7d520",
  storageBucket: "chatbot-auth-7d520.appspot.com",
  messagingSenderId: "183806305634",
  appId: "1:183806305634:web:0eab4e0921ac1b4466b83b"
};

const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
const auth = getAuth(app);

let name=document.getElementById("name");
let mail=document.getElementById("mail");
let phone=document.getElementById("phone");
let pass=document.getElementById("pass");

window.signup= function(e){
  e.preventDefault();
  let obj={
    name:name.value,
    mail:mail.value,
    phone:phone.value,
    pass:pass.value,
  }
  createUserWithEmailAndPassword(auth, obj.mail, obj.pass)
  .then(function(success){
    window.location.replace("chat.html");
  })
  .catch(function(err){
    alert("Something went wrong! Please, Check your Network Connectivity!");
  })
};