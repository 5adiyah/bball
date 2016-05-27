var Github = require('./../app/js/app.js').Github;

var getName = function(name){
  console.log(name);
  return name;
}


$(document).ready(function(){
  var github = new Github();
  github.grab(getName);
});
