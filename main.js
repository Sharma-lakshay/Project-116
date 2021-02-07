noseX= 0;
noseY= 0;
function preload(){
moustache= loadImage("https://i.postimg.cc/SsN3Vr3V/Moustache.png");
}

function setup(){
   canvas= createCanvas(300, 300);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(300, 300)
   video.hide();
   poseNet= ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}

function draw(){
image(video, 0, 0, 300, 300);
image(moustache, noseX, noseY, 55, 50);
}

function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     noseX= results[0].pose.nose.x- 25;
     noseY= results[0].pose.nose.y- 3;
     console.log("Nose x= " + noseX);
     console.log("Nose y= " + noseY);
 }
}

function take_snapshot(){
    save("myfilterpic.png")
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
