'use strict';

// Constructor
var Footer = function() {
  var $ = require('jquery');
  var windowWidth = $(window).width();
  if (windowWidth >= 641) {
    $('.social-bar li').hover(function(){
      $(this).animate({
        "margin-right": '-10'
      }, 100);
    }, function(){
 	    $(this).animate({
 		    "margin-right": '0'
 	    }, 100);
    });
  } 
};

module.exports = Footer;
