
ctx = document.getElementById("canvas").getContext("2d");

window.onload(function(){
		drawLoadingScreen();
});


function drawLoadingScreen(){
	var i = 0;
	setInterval(function(){
		ctx.font = "30px Arial";
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
}
