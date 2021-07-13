 var firebaseConfig = {
    apiKey: "AIzaSyA1VBD6AI6IbwJJvOyK5hMn5m9w3Ql-01Q",
    authDomain: "miniproject-546b7.firebaseapp.com",
    projectId: "miniproject-546b7",
    storageBucket: "miniproject-546b7.appspot.com",
    messagingSenderId: "769666339845",
    appId: "1:769666339845:web:fefc8ddf1285de9257786c",
    measurementId: "G-SJMDZXKJR5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
const auth = firebase.auth();
var database = firebase.database();
window.localStorage.setItem("location","null");
function signUp()
{
    var uname = document.getElementById("uname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var mobno = document.getElementById("mobno").value;
    database.ref('users/' + uname).set({
      Name : name,
      email : email,
      mobileNumber : mobno
  })
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    alert("Registered sucessfully");
    var user = userCredential.user;
    change();
    // ...
  })
  .catch((error) => {
    alert("error");
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
function signIn()
{
    var uname = document.getElementById("unamelog").value;
    var password = document.getElementById("passwordlog").value;
    var email = document.getElementById("emaillog").value;
    alert(email);
    alert(password)
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    alert("signed in sucessfully");
    var user = userCredential.user;
    localStorage.setItem('uname',uname);
    localStorage.setItem('email',email);
    window.location="./sample.html";
    // ...
  })
  .catch((error) => {
    alert("err")
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

function signOut()
{
   // auth.signOut();
    alert("Sign out sucessfully");
}
function ll()
{
   document.getElementById("logOpen").style.display = "block";
   document.getElementById("signOpen").style.display = "none";
   document.getElementById("main1").style.display = "none";
   document.getElementById("main2").style.display = "none";
}
function rr()
{
  document.getElementById("logOpen").style.display = "none";
  document.getElementById("signOpen").style.display = "block";
  document.getElementById("main1").style.display = "none";
   document.getElementById("main2").style.display = "none";
}
function change()
{
   if(document.getElementById("logOpen").style.display == "none")
   {
      document.getElementById("signOpen").style.display = "none";
      document.getElementById("logOpen").style.display = "block";
   }
  else
   {
      document.getElementById("logOpen").style.display = "none";
      document.getElementById("signOpen").style.display = "block";
   }
}