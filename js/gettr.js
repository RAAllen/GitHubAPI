var apiKey = require('./../.env').apiKey;

Gettr = function(){
}

Gettr.prototype.getRepos = function(identity){
  $.get('https://api.github.com/users/' + identity + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.selectedGettr').text(response.login);
    $('.gettrAddress').text(response.url);
    $('.gettrName').text(response.name);
    $('.gettrEmail').text(response.email);
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('.selectedGettr').text('Gettr Unsucessful, try again yo!');
  });
  $.get('https://api.github.com/users/' + identity + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.selectedGettrRepos').text('');
    for(i=0; i<response.length; i++){
      $('.selectedGettrRepo').append('<tr><td>' + response[i].name + '</td><td>' + response[i].created_at + '</td><td>' + response[i].url + '</td><td>' + response[i].description + '</td></tr>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.gettrModule = Gettr;
