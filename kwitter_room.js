//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBkMwD9JWVZolMGmhWVgVacU9LXCbs7uKU",
  authDomain: "fishtopia-b902f.firebaseapp.com",
  databaseURL: "https://fishtopia-b902f-default-rtdb.firebaseio.com",
  projectId: "fishtopia-b902f",
  storageBucket: "fishtopia-b902f.appspot.com",
  messagingSenderId: "488055241304",
  appId: "1:488055241304:web:d8ea38804dcd11cb46282d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Name for Chating with someone"
    })
}