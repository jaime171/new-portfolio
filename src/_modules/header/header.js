'use strict';
var Header = function() {
  var $ = require('jquery');
  $('#triggerDown').on('click', function(){
    $('#menu').slideDown({width:'toggle'},350);
  });
  $('#triggerUp').on('click', function(){
    $('#menu').slideUp('slow');
  });
};

module.exports = Header;
