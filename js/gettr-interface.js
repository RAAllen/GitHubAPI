var Gettr = require('./../js/gettr.js').gettrModule;

$(document).ready(function(){
  var currentGettr = new Gettr();
  $('#submit').click(function(){
    var name = $('#name').val();
    currentGettr.getRepos(name);
  });
});
