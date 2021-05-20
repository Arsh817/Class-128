song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
  song = loadSound("music.mp3");
}
function setup() {
   canvas = createCanvas(400,400);
   canvas.position(500,170);
   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose' ,gotPoses);
  }

function modelLoaded() {
  console.log('Posenet is Intialized!');
}

function draw() {
  image(video,0,0,400,400);
}
function play() {
   song.play();
   song.volume(1);
   song.rate(1);
}
function pause_music() {
  song.pause();
}
function stop_music() {
  song.stop();
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
  }
}