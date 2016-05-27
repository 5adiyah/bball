var user = require('./../app/js/app.js').user;
var repos = require('./../app/js/app.js').repos;

var getName = function(name){
  $('#userName').text(name.name);
  console.log(name.name);
};

var getEmail = function(name){
  $('#userEmail').text(name.email);
  console.log(name.email);
};

var getLocation = function(name){
  $('#userLocation').text(name.location);
  console.log(name.location);
};

var getPic = function(name){
  $('#userPic').html("<img src='"+ name.avatar_url + "' />");
  console.log(name.avatar_url);
};

var getRepoName = function(name){
  name.forEach(function(repoName, i){
    var part1 = '<br> <a id="num';
    var part2 = '" class="repoName" href="';
    var part3 = '">';
    var part4 = '</a>';
    $('#userRepos').append(part1 + i + part2 + repoName.html_url + part3 + repoName.name + part4);
    if(repoName.description != ""){
      $('#num' + i).append('<p id="description"> &nbsp; &nbsp; '+ repoName.description + '</p>');
    }
  });
};


$(document).ready(function(){
  $("form#usernameForm").submit(function(event) {
    event.preventDefault();
    var userName = $("input#username").val(); //put this back
    user(userName, getName, getEmail, getLocation, getPic);
    repos(userName, getRepoName);
    $('.userInput').hide();
    $('.userInfo').show();
    $('.repo').hide();
    $('.emailForm').hide();

  $('.usrButton').click(function(){
    $('.userInput').show();
    $('.userInfo').hide();
    $('.repo').hide();
    $('.emailForm').hide();
  });

  $('.ghButton').click(function(){
    $('.userInput').hide();
    $('.userInfo').hide();
    $('.emailForm').hide();
    $('.repo').show();
  });

  $('.emailButton').click(function(){
    $('.userInput').hide();
    $('.userInfo').hide();
    $('.repo').hide();
    $('.emailForm').show();
  });

  });



});
