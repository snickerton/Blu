
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
			ducking = true;	
		}
		if(!key[83]){
			ducking = false;
		}

		
		player.yVel += 10/FPS; 
		
	
		
		//sides bounce remember the height is the ground
		if(player.y > cHeight-10){
			player.y = cHeight-10;
			player.yVel *= -.5;
		}
		
		if(player.y < 5){
			player.y = 5;
			player.yVel *= -.5;
		}
		
		if(player.x > cWidth-10){
			player.x = cWidth-10;
			player.xVel *= -.5;
		}
		if(player.x < 10){
			player.x = 10;
			player.xVel *= -.5;
		}
		
		
		player.x += player.xVel;
		player.y += player.yVel;
		
		ctx.fillStyle = "#FFF";
		ctx.fillRect(player.x, player.y,10, 10);
		
		console.log("Velocity:"+player.xVel+", "+player.yVel+" Position:"+player.x+", "+player.y);
	}, 1000/FPS);
}


//};


