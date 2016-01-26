'use strict';
var Header = function() {
  var $ = require('jquery');
  var body = document.body,
      socialBar = document.getElementById('social-bar'),
      menu = document.getElementById('menu');
  $('#triggerDown').on('click', function(){
    $('#menu').slideDown({width:'toggle'},350);
    body.style.overflow = "hidden";
    menu.style.zIndex = 99;
  });
  $('#triggerUp').on('click', function(){
    $('#menu').slideUp({width:'toggle'},350);
    body.style.overflow = "auto";
  });
};
module.exports = Header;
