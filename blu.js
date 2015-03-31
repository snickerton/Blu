
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

function Block(x, y, size){
	this.x = x;
	this.y = y;
	this.size = size;
}

function game(){
	
	var boost, player, FPS, obs;
	
	//array of game objects
	obs = [new Block(cWidth/2, cHeight/2, 100, 100)];
	
	FPS = 50;
	
	player = new Object();
	player.x = 5;
	player.y = 5;
	player.width = 10;
	player.height = 10;
	//pps = pixels per second
	player.xVel = 0;
	player.yVel = 0;
	boost = -.7;
	
	key = {};
      	document.body.addEventListener('keydown', function(event) {
               	return key[event.keyCode] = true;
        });	
	  document.body.addEventListener('keyup', function(event) {
        return key[event.keyCode] = false;
      });
	
	
	setInterval(function(){
		
		ctx.fillStyle = "#000";
		ctx.fillRect(0,0,cWidth, cHeight);
		
		if(key[87]){
			player.yVel += boost;	
		}
		
		if(key[65]){
			player.xVel += boost;	
		}
		
		if(key[68]){
			player.xVel -= boost;	
		}
		
		if(key[83]){
			player.width = 13;
			player.height = 5;
		}
		if(!key[83]){
			player.width = 10;
			player.height = 10;
		}

		
		
		player.yVel += 10/FPS; 
		
		
		for(i = 0; i<obs.length; i++){
			if(player.y<obs[i].y+obs[i].size)&&player.y>obs[i].y){
				player.yVel *= -.5;	
			}
			if(player.x<(obs[i].x+obs[i].size)&&player.x>obs[i].x){
				player.xVel *= -.5;	
			}

		}
		
		
		//sides bounce remember the height is the ground
		if(player.y > cHeight-player.height){
			player.y = cHeight-player.height;
			player.yVel *= -.5;
		}
		
		if(player.y < 0){
			player.y = 0;
			player.yVel *= -.5;
		}
		
		if(player.x > cWidth-player.height){
			player.x = cWidth-player.height;
			player.xVel *= -.5;
		}
		if(player.x < 0){
			player.x = 0;
			player.xVel *= -.5;
		}
		
		
		player.x += player.xVel;
		player.y += player.yVel;
		
		ctx.fillStyle = "#FFF";
		ctx.fillRect(player.x, player.y,player.width, player.height);
		
		console.log("Velocity:"+player.xVel+", "+player.yVel+" Position:"+player.x+", "+player.y);
	}, 1000/FPS);
}


//};


