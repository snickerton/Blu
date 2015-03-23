
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
		setInterval(function(){
		ctx.fillStyle = "#000";
		ctx.fillRect(0,0,cWidth, cHeight);

	}, 1000);
}


//};


