var firebaseConfig = {
  apiKey: "AIzaSyAZV4o8dIy62YPJFX_SH-u8qSSd3gdokkk",
  authDomain: "kwitter-84fe3.firebaseapp.com",
  databaseURL: "https://kwitter-84fe3-default-rtdb.firebaseio.com",
  projectId: "kwitter-84fe3",
  storageBucket: "kwitter-84fe3.appspot.com",
  messagingSenderId: "410605790842",
  appId: "1:410605790842:web:4a2a25e0f5a1ea15e9fdc3"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addRoom(){
          roomname = document.getElementById("roomname").value;

          firebase.database().ref("/").child(roomname).update({
                purpose : "Adding Room Name"
          });
          localStorage.setItem("roomname", roomname);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
