var user = require('./../app/js/app.js').user;
var repos = require('./../app/js/app.js').repos;

var getName = function(name){
  $('#userName').text("User Name: " + name.name);
  console.log(name);
}

var getEmail = function(name){
  $('#userEmail').text("User Email: " + name.email);
}

var getLocation = function(name){
  $('#userLocation').text("User Location: " + name.location);
}

var getPic = function(name){
  $('#userPic').html("<img src='"+ name.avatar_url + "' />");
}

var getRepoName = function(name){
  name.forEach(function(repoName, i){
    var part1 = '<br> <a id="num';
    var part2 = '" class="repoName" href="'
    var part3 = '">';
    var part4 = '</a>';
    $('#userRepos').append(part1 + i + part2 + repoName.html_url + part3 + repoName.name + part4);
    $('#num' + i).append('<p id="description"> &nbsp; &nbsp; '+ repoName.description + '</p>');
  })
  console.log("hello");
}



$(document).ready(function(){
  user("daneden", getName, getEmail, getLocation, getPic);
  repos(getRepoName);
});
