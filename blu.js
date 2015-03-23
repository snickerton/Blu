
var canvas, ctx, cWidth, cHeight;


window.onload=function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	cWidth = canvas.width;
	cHeight = canvas.height;
	//showLS();
	game();
};

	function showLS(){
	var i = 0;
	setInterval(function(){
		ctx.font = "30px Arial";
		ctx.fillStyle = "#000";
		ctx.fillRect(0,0,cWidth, cHeight);
		ctx.fillStyle = "#FFF";
		if(i == 0){
			console.log("scenario 0");
			ctx.fillText("Loading.",cWidth/2 - ctx.measureText("Loading.").width/2,cHeight/2);
		}
		if(i == 1){
			ctx.fillText("Loading..",cWidth/2 - ctx.measureText("Loading..").width/2,cHeight/2);
		}
		if(i == 2){
			ctx.fillText("Loading...",cWidth/2 - ctx.measureText("Loading...").width/2,cHeight/2);
		}
		i = (i+1)%3;
	}, 1000);
}

function game(){
	
	var boost, player, FPS, ducking;
	
	FPS = 50;
	
	player = new Object();
	player.x = 5;
	player.y = 5;
	//pps = pixels per second
	player.xVel = 0;
	player.yVel = 0;
	boost = 2;
	
	key = {};
      	document.body.addEventListener('keydown', function(event) {
               	return key[event.keyCode] = true;
        });	
	
	
	
	setInterval(function(){
		ctx.fillStyle = rgb(0,0,0,.5);
		ctx.fillRect(0,0,cWidth, cHeight);
		
		if(key[87]){
			player.yVel += boost;	
		}
		
		if(key[83]){
			ducking = true;	
		}
		if(!key[83]){
			ducking = false;
		}

		
		player.xVel += 9.8/FPS; 
		player.yVel += 9.8/FPS; 
		
	
		
		//ground bounce
		if(player.x < 0){
			player.x = 0;
			player.xVel *= -.5;
		}
		
		
		player.x += player.xVel;
		player.y += player.yVel;
		
		ctx.fillStyle = #FFF;
		ctx.fillRect(player.x, player.y,50, 50);
	}, 1000/FPS);
}


//};


