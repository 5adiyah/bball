var apiKey = require('./../../.env').apiKey;

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

exports.repos = function(getRepo){
  $.get('https://api.github.com/users/daneden/repos?type=all?access_token=' + apiKey).then(function(response){
    getRepo(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


///repos?type=all
//'https://api.github.com/users/5adiyah/repos?type=all?access_token=c3f10787852e13130c83b02a6f04521eabaa9c6c'
