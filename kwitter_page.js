const firebaseConfig = {
    apiKey: "AIzaSyBXkdbhRfuXU2ZHExdY3revIhJC_pVFja0",
    authDomain: "let-s-chat-web-app-20327.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-20327-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-20327",
    storageBucket: "let-s-chat-web-app-20327.appspot.com",
    messagingSenderId: "742841219084",
    appId: "1:742841219084:web:c2dfd2a71f5a037d02d629"
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