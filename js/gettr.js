var apiKey = require('./../.env').apiKey;
// for the purpose of easy testing the apikey is listed here:
// exports.apiKey = "670f79bad598107ddd6f4f6164d2d7e422b578c0";

Gettr = function(){
};

Gettr.prototype.getRepos = function(identity)
{
  $.get('https://api.github.com/users/' + identity + '?access_token=' + apiKey).then(function(response)
  {
    console.log(response);
    $('.selectedGettr').text(response.login);
    $('.gettrAddress').text(response.url);
    $('.gettrName').text(response.name);
    $('.gettrEmail').text(response.email);
  }).fail(function(error)
  {
    console.log(error.responseJSON.message);
    $('.selectedGettr').text('Gettr unsuccessful, the inputted user was not found!');
  });
  $.get('https://api.github.com/users/' + identity + '/repos?access_token=' + apiKey).then(function(response)
  {
    console.log(response);
    $('.selectedGettrRepos').text('');
    for(i=0; i<response.length; i++)
    {
      $('.selectedGettrRepo').append('<tr><td><a href="' + response[i].html_url + '">' + response[i].name + '</a></td><td>' + response[i].created_at + '</td><td>' + response[i].description + '</td></tr>');
    }
  }).fail(function(error)
  {
    console.log(error.responseJSON.message);
  });
};

exports.gettrModule = Gettr;
