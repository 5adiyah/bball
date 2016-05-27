var Github = require('./../app/js/app.js').Github;

var getName = function(name){
  $('#userName').text("User Name: " + name.name);
  console.log(name);
}

var getPic = function(name){
  $('#userPic').html("<img src='"+ name.avatar_url + "' />");
}


$(document).ready(function(){
  var github = new Github();
  github.user("5adiyah", getName, getPic);
});
