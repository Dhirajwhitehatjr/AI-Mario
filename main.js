
function preload() 
{
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kill = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
}
function setup() 
{
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotResults);
}
function gotResults(results)
{
	console.log(results);
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
}
function modelLoaded()
{
	console.log("Model Loaded");
}
function draw() 
{
	game();
}
