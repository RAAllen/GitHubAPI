var Gettr = require('./../js/gettr.js').gettrModule;

$(document).ready(function(){
  var currentGettr = new Gettr();
  $('#submit').click(function(){
    $('#display-user').toggle();
    $('#search').toggle();
    var identity = $('#name').val();
    $('#name').val('');
    currentGettr.getRepos(identity);
  });
  $('#toggle-back').click(function(){
    $('#display-user').toggle();
    $('#search').toggle();
  });
});
