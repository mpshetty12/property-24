const firebaseConfig = {
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
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var database = firebase.database();
//   var i=0;
// storageRef.child('images/').listAll().then(function(result){
//     result.items.forEach(function(imageRef){
//        //console.log("Image reference "+ imageRef);
//        i++;
//        displayImage(i,imageRef);
//     });
// });
//document.getElementById("wholeview").style.display='none'; 






var nm = window.localStorage.getItem("nm");
var un = window.localStorage.getItem("un");
var cur_user = window.localStorage.getItem("uname");
var imgs,ml,rt,lcn,avail,sqfeet,size;
function pp(){
var q = database.ref('users').orderByKey();
q.once("value").then(function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var q1 = childSnapshot;
        //console.log(q1);
        q1.forEach(function(childSnapshot){
          if(childSnapshot.val().property_name == nm && childSnapshot.val().user_name == un){
            imgs = window.localStorage.getItem("imgs");
            ml = childSnapshot.val().email;
            rt = childSnapshot.val().property_rate;
            lcn = childSnapshot.val().location;
            avail = childSnapshot.val().availability;
            sqfeet = childSnapshot.val().sq_ft;
           size = childSnapshot.val().size;
           localStorage.setItem("pmail",ml);
           ii();
        }
        })
    })
})
localStorage.setItem("pmail",ml);
}
       

        
setTimeout(function(){
    document.getElementById("cntview").innerHTML=window.localStorage.getItem("number"); 
    pp();
},1500)
function ii()
{
    alert(localStorage.getItem("pmail"));
    alert(localStorage.getItem("email"));
        let vhtml = '';
         
        vhtml += '<img class="ig" id="ig1" src=';
        vhtml += imgs;
        vhtml += '></img>';

        vhtml += '<h1 id="un">';
        vhtml += un;
        vhtml += '</h1>';
       
        vhtml += '<h2 id="ml">';
        vhtml += ml;
        vhtml += '</h2>';
         
     

        vhtml += '<table border="1" ><tr> <th>property name :</th><td id="nm">';
        vhtml += nm;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property rate :</th><td id="rt">';
        vhtml += rt;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property availability :</th><td id="rt">';
        vhtml += avail;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property in square feet :</th><td id="rt">';
        vhtml += sqfeet;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property size :</th><td id="rt">';
        vhtml += size;
        vhtml += '</td></tr>';

        vhtml += '<tr><th>property location :</th><td id="lcn">';
        vhtml += lcn;
        vhtml += '</td></tr></table>';




        document.getElementById("vi").innerHTML = vhtml;
        if(un == cur_user){
        document.getElementById("myself").style.display = "block";
      }
      document.getElementById("p").style.display = "none";
        document.getElementById("nn").value = nm;
document.getElementById("rr").value = rt;
document.getElementById("lcn1").value = lcn;
document.getElementById("avl").value = avail;
document.getElementById("sqft").value = sqfeet;
document.getElementById("size").value = size;
}
// var q = database.ref('users').orderByKey();
// q.once("value").then(function(snapshot){
//     snapshot.forEach(function(childSnapshot){
//         var q1 = childSnapshot;
//         //console.log(q1);
//         q1.forEach(function(childSnapshot){
//            console.log(childSnapshot.val().email);
//            console.log(childSnapshot.val().image_url);   
//            console.log(childSnapshot.val().property_name);
//            console.log(childSnapshot.val().property_rate); 
//            console.log(childSnapshot.val().user_name); 
//         })
//     })
// })


function update(){     
    // var pn = document.getElementById("nn").value;
    //  let up = window.localStorage.getItem("un");
    // let pp = window.localStorage.getItem("nm");
    // var updates = {
    //     property_name : pn
    // }
    // database.ref('users/'+ up+'/'+pp ).update(updates);
    var nm = window.localStorage.getItem("nm");
    var un = window.localStorage.getItem("un");
     var pn = document.getElementById("nn").value ;
     var r1 = document.getElementById("rr").value ;
     var lcn = document.getElementById("lcn1").value;
     var avail = document.getElementById("avl").value;
     var sqfeet = document.getElementById("sqft").value;
     var size = document.getElementById("size").value;

     database.ref('users/'+ un + '/'+nm).remove();
     database.ref('users/' + un + '/' + pn ).set({
        user_name : un,
        email : ml,
        property_name : pn,
        property_rate : r1,
        image_url : imgs,
        location : lcn,
        availability : avail,
        sq_ft : sqfeet,
        size : size
    })
    window.localStorage.setItem("un",un);
    window.localStorage.setItem("ml",ml);
    window.localStorage.setItem("nm",pn);
    window.localStorage.setItem("rt",r1);
    window.localStorage.setItem("lcn",lcn);
    window.location = './view.html';
}
function delete1()
{
    alert(nm);
    alert(un);
    database.ref('users/'+ un + '/'+nm).remove().then(function() {
        firebase.storage().refFromURL(imgs).delete();
    })
    .catch(function(error){
       
    })
    // var cnfm = prompt("Are you sure want to delete type 1  else 0");
    // if(cnfm == 1){
    //     database.ref('users/'+ un + '/'+nm).remove();
    //     var oldimage = firebase.storage().refFromURL(imgs);
    //     oldimage.delete().then(function(){
    //     })
    //     .catch(function(error){
    //         alert("close iot ")
    //     })
    // window.localStorage.setItem("un","null");
    // window.localStorage.setItem("ml","null");
    // window.localStorage.setItem("nm","null");
    // window.localStorage.setItem("rt","null");
    // window.localStorage.setItem("imgs","null");
    // window.location = './view.html';
    // }
}         
function changeimage()
{
    var oldimage = firebase.storage().refFromURL(imgs);
    oldimage.delete().then(function(){
        document.getElementById("p").style.display = "block";
        setTimeout(function(){
            imageChange();
        },4000)
    })
    .catch(function(error){
        alert("close iot ")
    })
}
function imageChange()
{
    var image = document.getElementById("image1").files[0];
    var imageName = image.name;
    var storageRef = firebase.storage().ref('images/'+imageName);
    var uploadTask = storageRef.put(image);
    uploadTask.on('state_changed', function(snapshot){
        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is "+progress+" done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            //alert(downloadURL);
             var updates = {
             image_url : downloadURL
             }
             database.ref('users/'+ un+'/'+nm ).update(updates);
             window.localStorage.setItem("imgs",downloadURL);
            alert("saved");
           // window.location = './view.html';
        })
    })
    document.getElementById("p").style.display = "none";
}
// mail part 
function sendEmail(mm) { 
    otp=makeid(6);
    alert(mm);
        Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "vocalforlocalteam@gmail.com", 
            Password: "vocal@local1", 
            To: mm, 
            From: "vocalforlocalteam@gmail.com", 
            Subject: "We are fron vocal for local team we give a permission to change your password ", 
            Body: "Hi, Enter this OTP in block then it give a permission to change password  "+"OTP :   "+otp , 
        }) 
            .then(function (message) { 
            var ot = prompt("Enter otp");	
            if(ot===otp)
            {
              alert("success")
              document.getElementById("pass").style.display="block";
            }
		    else
		    {
              alert("fail")
            }
              });
} 