

function askForColor(){
	return prompt('pick a color');
}

var color = ' '
var tag = ' '

function changeColor(){
	color = askForColor();
	tag = document.getElementsByTagName('body')[0]
	tag.style.backgroundColor = color;
}