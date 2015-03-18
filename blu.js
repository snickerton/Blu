

window.onload=function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	//ctx.fillRect(0,0,ctx.width,ctx.height); 
	var i = 0;
	setInterval(function(){
		console.log("ran");
		
		ctx.font = "30px Arial";

		ctx.fillStyle = "#FFF";
		if(i == 0){
			console.log("scenario 0");
			ctx.fillText("Loading.",canvas.width/2,canvas.height/2);
		}
		if(i == 1){
			ctx.fillText("Loading..",canvas.width/2,canvas.height/2);
		}
		if(i == 2){
			ctx.fillText("Loading...",canvas.width/2,canvas.height/2);
		}
		i = (i+1)%3;
	}, 1000);

};


//};


