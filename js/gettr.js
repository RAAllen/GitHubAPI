var apiKey = require('./../.env').apiKey;

Gettr = function(){
}

Gettr.prototype.getRepos = function(identity){
  $.get('https://api.github.com/users/' + identity + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.selectedGettr').text(response.login);
    $('.gettrAddress').attr(src, response.html_url);
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
      $('.selectedGettrRepo').append('<p>' + response[i].name + '</p><p>' + response[i].created_at + '</p><p>' + response[i].url + '</p><p>' + response[i].description + '</p>');
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.gettrModule = Gettr;

// {
//   $('.selectedGettrRepos').append('<li>' + response[i].name + "<ul><li>" + response[i].created_at + '</li><li><a href="' + response[i].url + '"></a></li><li>' + response[i].description + '</li>')
// }
// exports.apiKey = "44a6e74c3a491cb2fe9477e23abac4fbfdeb3793";
