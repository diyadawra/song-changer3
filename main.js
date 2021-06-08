songpe="";
songha="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function preload(){
songha=loadSound("music.mp3");
songpe=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    console.log("leftWristx="+leftwristX+"leftWristy"+leftwristY);
   rightwristX=results[0].pose.rightWrist.x;
   rightwristY=results[0].pose.rightWrist.y;
   console.log("rightWristx"+rightwristX+"rightWristy"+rightwristY);
    }
}
function draw(){
image(video,0,0,600,500);

}
function play(){
    song.play();
}