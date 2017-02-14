


  // Video
  var video = document.getElementById("video1");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");



// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused === true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "<img src='icons/pause-icon.png'/>";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "<img src='icons/play-icon.png'/>";
  }
});

//Event listener for the mute/unmute button
muteButton.addEventListener("click", function(){
  if (video.muted === false) {
    // mute the audio
    video.muted = true;
    //change the button to mutted icon
    muteButton.innerHTML = "<img src='icons/volume-off-icon.png'/>";
  } else {
    //unmute audio
    video.muted = false;
    //change the button to the unmutted icon
    muteButton.innerHTML = "<img src='icons/volume-on-icon.png'/>";
  }
});

// Event listener for the full-screen button
fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

//Event listener for the progress seek-bar
seekBar.addEventListener("change", function(){
  //calculate the changed time
  var time = video.duration * (seekBar.value / 100);
  //Update the time of the video
  video.currentTime = time;
});

// Update the time shown in seek bar as video play-pause
video.addEventListener("timeupdate", function(){
  //calculate the slider value
  var value = (100 / video.duration) * video.currentTime;
  //Update the slider value
  seekBar.value = value;
});

// Video pauses when actively seeking on the slider
seekBar.addEventListener("mousedown", function(){
  video.pause();
});

//Video plays after user is done moving slider
seekBar.addEventListener("mouseup", function(){
  video.play();
});



// Style the text when being spoken in the video
// $("p.").addClass(function() {
//
// }


function highlight () {

if (video.currentTime < 4){
 $("p.first-text").addClass("highlight");
} else if (video.currentTime < 17) {
 $("p.first-text").removeClass("highlight");
 $("p.second-text").addClass("highlight");
}
}

highlight();
