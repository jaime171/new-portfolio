// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';
var $ = require('jquery');
var Link = require('../_modules/link/link');
var header = require('../_modules/header/header');
var footer = require('../_modules/footer/footer');
$(function() {
  new Link(); // Activate Link modules logic
  new header();
  new footer();
function loadVideos() {
	var videos = [];
  var triggers = [];
  var sources = [];
  for (var i = 0; i < 3; i++) {
    sources.push("/images/videos/video-" + i + ".mp4");
    videos.push(document.getElementById('video-'+i));
    triggers.push(document.getElementById('trigger-'+i));
  }
  for (var i = 0; i < 3; i++) {
  	videos[i].src = sources[i];
    videos[i].load();
    console.log("aseg")
  }
}
loadVideos();
function mediaPlayer() {
var allVideos = document.getElementsByClassName('videos');
	for (var i = 0; i < allVideos.length; i++) {
	  allVideos[i].onclick = function() {
		  console.log(this)
		  if(this.childNodes[1].paused) {
        this.childNodes[2].style.opacity = 0;
        this.childNodes[2].style.zIndex = -1;
        this.childNodes[1].play()
		  } else {
		  	this.childNodes[2].style.opacity = 1;
    	  this.childNodes[2].style.zIndex = 1;
        this.childNodes[1].pause();
		  }
    }
  }
}
mediaPlayer();
});

