

window.onload=function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var cWidth, cHeight;
	cWidth = canvas.width;
	cHeight = canvas.height;
	var i = 0;
	setInterval(function(){
		console.log("ran");
		
		ctx.font = "30px Arial";
		ctx.fillStyle = "#FFF";
		ctx.fillRect(0,0,cWidth, cHeight);
		ctx.fillStyle = "#000";
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

};


//};


