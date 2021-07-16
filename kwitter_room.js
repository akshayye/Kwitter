 var firebaseConfig = {
    apiKey: "AIzaSyCJyXL0kWLgqbtZefdUNZsvhD4HfK6Mp30",
    authDomain: "kwitter-3b500.firebaseapp.com",
    databaseURL: "https://kwitter-3b500-default-rtdb.firebaseio.com",
    projectId: "kwitter-3b500",
    storageBucket: "kwitter-3b500.appspot.com",
    messagingSenderId: "643190479029",
    appId: "1:643190479029:web:2a3f78747d9454fad546fc"
  };
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name +"!";

  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";

  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name -" + Room_names);
      row="<div class='room_name' id= "+ Room_names +"onclick='redirectToRoomName(this.id)'> # "+ Room_names + " </div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location="index.html";
}