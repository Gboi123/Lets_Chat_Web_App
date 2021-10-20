// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXkdbhRfuXU2ZHExdY3revIhJC_pVFja0",
    authDomain: "let-s-chat-web-app-20327.firebaseapp.com",
    projectId: "let-s-chat-web-app-20327",
    storageBucket: "let-s-chat-web-app-20327.appspot.com",
    messagingSenderId: "742841219084",
    appId: "1:742841219084:web:c2dfd2a71f5a037d02d629"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+ user_name + "!";
  
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name" + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();


function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        Boi : "adding room name"
  })
  localStorage.setItem("room name " + room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room name", name);
  window.location = "kwitter_page.html";
}