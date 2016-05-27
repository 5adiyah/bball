var apiKey = require('./../../.env').apiKey;

exports.Github = function(){
  this.name = name;
};

exports.Github.prototype.grab = function(userName, getName){
  var userName = "5adiyah"; //REMOVE LATER AND USE jQUERY
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
