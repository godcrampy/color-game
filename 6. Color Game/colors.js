var reset = document.getElementById("reset");
var color = randomColorArr(6);
var pickedColor = color[pickColor()];
var msgDisplay = document.getElementById("message");
var easyBtn =document.getElementById("easyBtn");
var hardBtn =document.getElementById("hardBtn");
var isEasy = false;

var sqr = document.querySelectorAll(".square");

easyBtn.addEventListener("click", function(){
	isEasy = true
	//3 size array
	//generate random colors
	color = randomColorArr(3);
	//change colors
	for (var i = 0; i<sqr.length;i++) {
	//add initial colors
	sqr[i].style.background=color[i];}
	sqr[3].style.display="none"
	sqr[4].style.display="none"
	sqr[5].style.display="none"
	//choose a correct color
	pickedColor = color[pickColor()];
	var colorDisplay = document.getElementById("colorDisplay");
	colorDisplay.textContent = pickedColor;
	msgDisplay.textContent="";
	document.querySelector("h1").style.background="steelblue";
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
})

hardBtn.addEventListener("click", function(){
	isEasy = false;
	//6 size array
	//generate random colors
	color = randomColorArr(6);
	//change colors
	for (var i = 0; i<sqr.length;i++) {
	//add initial colors
	sqr[i].style.background=color[i];}
	sqr[3].style.display="block"
	sqr[4].style.display="block"
	sqr[5].style.display="block"
	//choose a correct color
	pickedColor = color[pickColor()];
	var colorDisplay = document.getElementById("colorDisplay");
	colorDisplay.textContent = pickedColor;
	msgDisplay.textContent="";
	document.querySelector("h1").style.background="steelblue";
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
})

reset.addEventListener("click",function(){
	if(isEasy){
		//3 size array
	//generate random colors
	color = randomColorArr(3);
	//change colors
	for (var i = 0; i<sqr.length;i++) {
	//add initial colors
	sqr[i].style.background=color[i];}
	sqr[3].style.display="none"
	sqr[4].style.display="none"
	sqr[5].style.display="none"
	}
	else{
		//6 size array
	//generate random colors
	color = randomColorArr(6);
	//change colors
	for (var i = 0; i<sqr.length;i++) {
	//add initial colors
	sqr[i].style.background=color[i];}
	sqr[3].style.display="block"
	sqr[4].style.display="block"
	sqr[5].style.display="block"
	//choose a correct color
	}
	//choose a correct color
	pickedColor = color[pickColor()];
	var colorDisplay = document.getElementById("colorDisplay");
	colorDisplay.textContent = pickedColor;
	msgDisplay.textContent="";
	document.querySelector("h1").style.background="steelblue";

})
for (var i = 0; i<sqr.length;i++) {
	//add initial colors
	sqr[i].style.background=color[i];
	//add event listener
	sqr[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor===pickedColor){
			msgDisplay.textContent="Correct!";
			win(pickedColor);

		}
		else{this.style.background="#232323";msgDisplay.textContent="Try Again";}
})
}

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

function win(color){
	for (var i = 0; i<sqr.length;i++) {
		sqr[i].style.background=color;
	}
	document.querySelector("h1").style.background=color;
	reset.textContent="Play Again?";
}

function pickColor(){
	return Math.floor(Math.random()*color.length);
}

function randomColorArr(num){
	//make array
	var arr = []
	//fill array
	for(var i = 0; i<num;i++){
		arr[i] = randomColor();
	}
	//return array
	return arr
}

function randomColor(){
	//pick r
	var r = Math.floor(Math.random()*256);
	//pick g
	var g = Math.floor(Math.random()*256);
	//pick b
	var b = Math.floor(Math.random()*256);
	//return
	return "rgb(" + r + ", " + g + ", " + b + ")";
}