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

function upload()
{
    var image = document.getElementById("image").files[0];
    var name = document.getElementById("name1").value;
    var rate = document.getElementById("rate").value;
    var lcn = document.getElementById("lcn").value;
    var avail = document.getElementById('avl').value;
    var sqfeet = document.getElementById("sqfeet").value;
    var size = document.getElementById("size").value;

    var uname = localStorage.getItem('uname');
    var email = localStorage.getItem('email');
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
            database.ref('users/' + uname + '/' + name).set({
                user_name : uname,
                email : email,
                property_name : name,
                property_rate : rate,
                image_url : downloadURL,
                location : lcn,
                availability : avail,
                sq_ft : sqfeet,
                size : size,
                extr : [{"iur":"oh oh"}]
            })
            alert("saved");
        })
    })
}
// var i=0;
// function rc(){
// storageRef.child('images/').listAll().then(function(result){
//     result.items.forEach(function(imageRef){
//        //console.log("Image reference "+ imageRef);
//        i++;
//        displayImage(i,imageRef);
//     });
// });
// }
// function displayImage(row, images)
// {
//     images.getDownloadURL().then(function(url){
//        console.log(url);
//        let new_html = '';
//        new_html += '<div class="col-lg-4 col-xl-4" >';
//        new_html += '<a href="#">';
//        new_html += '<img src="'+url+'" class="img-rounded" alt="...">';
//        new_html += '<figcaption> home </figcaption>'
//        new_html += '</a>';
//        new_html += '</div>';
//        document.getElementById("list").innerHTML += new_html;
//     });
// }
function jj()
{
    alert(localStorage.getItem("email"));
}