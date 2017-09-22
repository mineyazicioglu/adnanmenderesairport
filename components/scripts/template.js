$(function() {
  var Mustache = require('mustache');

  $.getJSON('js/data.json', function(data) {
    var template = $('#newstpl').html();
    var html = Mustache.to_html(template, data);
    $('#news').html(html);    
  }); //getJSON
  
}); //function