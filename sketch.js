var clouds;

function setup(){
	createCanvas(1080, 720);
	setup_clouds();
}

function draw(){
	background(0);
	draw_all_clouds();
}

function setup_clouds(){
	clouds = [];
	for(let i = 0; i < 5; ++i){
		clouds[i] = [random()*(width/2), height/2 - random()*(height/2)];
	}
}

function draw_all_clouds(){
	for(let i = 0; i < clouds.length; ++i){
		draw_cloud(clouds[i]);

		//move cloud, and check if it needs to be repositioned
		let new_x = clouds[i][0] += (i+1)/2;
		if(new_x > width+50){
			clouds[i][0] = -300;
			clouds[i][1] = height/2 - random()*(height/2);
		}
	}
}

function draw_cloud(coords){
	noStroke();
	//body
	rect(coords[0], coords[1], 200, 50);
	//edge circles
	circle(coords[0], coords[1], 100);
	circle(coords[0]+200, coords[1], 100);
	//top circles
	circle(coords[0]+75, coords[1]-50, 140);
	circle(coords[0]+150, coords[1]-25, 120);
}
