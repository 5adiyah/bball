var firebase = require("firebase");

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhGUBRFZcrGH0o69FonZ-sLv9st9rIPEw",
    authDomain: "basketball-3fba2.firebaseapp.com",
    databaseURL: "https://basketball-3fba2.firebaseio.com",
    storageBucket: "basketball-3fba2.appspot.com",
    messagingSenderId: "210014366534"
  };
  firebase.initializeApp(config);

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

function addPlayer(name, email, phone) {
  var player = {
    name: name,
    email: email,
    phone: phone
  };

  // Get a key for a new Post.
  var newPlayer = firebase.database().ref().child('teams').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

exports.user = function(userName, getName, getEmail, getLocation, getPic){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    var name = response;
    var userName = getName(name);
    var userEmail = getEmail(name);
    var userLocation = getLocation(name);
    var userpic = getPic(name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repos = function(userName, getRepo){
  $.get('https://api.github.com/users/'+ userName + '/repos?type=all?access_token=' + apiKey).then(function(response){
    getRepo(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


///repos?type=all
//'https://api.github.com/users/5adiyah/repos?type=all?access_token=c3f10787852e13130c83b02a6f04521eabaa9c6c'
