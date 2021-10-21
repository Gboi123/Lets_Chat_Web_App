//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAK3yaUpGoTEA-5jKBSJ0uo0BRTHcmQUkA",
      authDomain: "kwitter-1346b.firebaseapp.com",
      databaseURL: "https://kwitter-1346b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1346b",
      storageBucket: "kwitter-1346b.appspot.com",
      messagingSenderId: "946412248468",
      appId: "1:946412248468:web:39c8ac52df39c697264381"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0});
     
      document.getElementById("msg").value = "";
}
      

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
