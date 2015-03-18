

//window.onload=function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	//ctx.fillRect(0,0,ctx.width,ctx.height); 
	drawLoadingScreen = function drawLoadingScreen(){
			
	var i = 0;
	setInterval(function(){
		ctx.font = "30px Arial";

		console.log("background drawn");
		ctx.fillStyle = "#FFF";
		if(i == 0){	
			ctx.fillText("Loading.",ctx.width/2,ctx.height/2);
		}
		if(i == 1){
			ctx.fillText("Loading..",ctx.width/2,ctx.height/2);
		}
		if(i == 2){
			ctx.fillText("Loading...",ctx.width/2,ctx.height/2);
		}
		i = (i+1)%3;
	}, 1000);
};

drawLoadingScreen();
//};


