window.onload = function() {
  var contraints = {
    audio: false,
    video: true};

  navigator.mediaDevices.getUserMedia(contraints).then( function(mediaStream) {
    var video = document.querySelector('.video');
    console.log(video);
    video.srcObject = mediaStream;
    video.play();
    video.style.margin = ('100px 400px 100px 400px')
  }) .catch (function(err) {
    console.log('Error ' + err.message);
  })
}