// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';
var $ = require('jquery');
var header = require('../_modules/header/header');
var footer = require('../_modules/footer/footer');
$(function() {
  new header();
  new footer();
function loadVideos() {
	var videos = [];
  var triggers = [];
  var sources = [];
  for (var i = 0; i < 3; i++) {
    sources.push("/images/videos/video-" + i + ".mp4");
  }
  return sources;
}
function mediaPlayer() {
	var loadSources = loadVideos();
  var allVideos = document.getElementsByClassName('videos');
	for (var i = 0; i < allVideos.length; i++) {
	  allVideos[i].onclick = function() {
	  	if(this.childNodes[1].readyState  !== 4) {
	  		var id = this.getAttribute('id');
	  	  var lastChar = id.substr(id.length - 1);
	  	  var number = parseInt(lastChar);
        this.childNodes[1].src = loadSources[number];
	  	}
      if(this.childNodes[1].paused) {
      	this.childNodes[1].play()
        this.childNodes[2].style.opacity = 0;
        this.childNodes[2].style.zIndex = -1;
      } else {
      	this.childNodes[1].pause();
        this.childNodes[2].style.opacity = 1;
        this.childNodes[2].style.zIndex = 1;
      }
		} 
  }
}
mediaPlayer();
});

