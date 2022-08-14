var nose_x =0;
var nose_y =0;


function preload() {
mask = loadImage("https://i.postimg.cc/PJ0nGbFV/mask-removebg-preview.png");

}

function setup() {

    canvas = createCanvas(300,250);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
    
}

function modelLoaded()  {

    console.log("modelLoaded");
}

function getposes(result) {

    if(result.length>0){

        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log(nose_x);
        console.log(nose_y);
    }
}


function draw() {

image(video,0,0,300,250);
fill(130,12,0);
image(mask,nose_x-100,nose_y-100,50,50);
}

function take_snapshot() {

 save("mask.jpg");
}
