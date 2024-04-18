
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8FMugbQLpl89f0qFMb_Ge3-xstO1QCxQ",
  authDomain: "chatbot-auth-7d520.firebaseapp.com",
  projectId: "chatbot-auth-7d520",
  storageBucket: "chatbot-auth-7d520.appspot.com",
  messagingSenderId: "183806305634",
  appId: "1:183806305634:web:0eab4e0921ac1b4466b83b",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let mail=document.getElementById("mail");
let pass=document.getElementById("pass");

window.login= function(e){
    e.preventDefault();
    let obj={
        mail:mail.value,
        pass:pass.value,
    };
    signInWithEmailAndPassword(auth, obj.mail, obj.pass)
        .then(function(success){
            window.location.replace("chat.html");
        })
        .catch(function(err){
            alert("Enter Valid Email or Password!");
        });
};