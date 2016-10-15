var apiKey = require('./../.env').apiKey;

Gettr = function(){

}

Gettr.prototype.getRepos = function(name){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.gettrModule = Gettr;
