var user = require('./../app/js/app.js').user;
var repos = require('./../app/js/app.js').repos;

var getName = function(name){
  $('#userName').text("User Name: " + name.name);
}

var getPic = function(name){
  $('#userPic').html("<img src='"+ name.avatar_url + "' />");
}

var getRepoName = function(name){
  name.forEach(function(repoName, i){
    var part1 = '<br> <a class="repoName" href="';
    var part2 = '">';
    var part3 = '</a>';
    $('#userRepos').append(part1 + "#" + part2 + repoName.name + part3);
    // $('#userRepos').append(part1 + repoName.html_url + part2 + repoName.name + part3);
    $('.repoName').click(function(){
      $('#description').text(repoName.description);
    })

    console.log(repoName.name);
  })
  console.log("hello");
}



$(document).ready(function(){
  user("daneden", getName, getPic);
  repos(getRepoName);
});
