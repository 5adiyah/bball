var apiKey = require('./../../.env').apiKey;

exports.Github = function(){
  this.name = name;
};

exports.Github.prototype.user = function(userName, getName, getPic){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    this.name = response;
    var userName = getName(this.name);
    var userpic = getPic(this.name);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


///repos?type=all
