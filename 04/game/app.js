console.log("game")
var click = document.getElementById('click');
var score = document.getElementById('score');

var count = 0;
var speed = 1500;
var level = 1;

function position(){
	var boxheight = gameBox.scrollHeight-50;
	var boxwidth = gameBox.scrollWidth-50;

	var x = makeRandom(0,boxwidth);
	var y = makeRandom(0,boxheight);

	click.style.backgroundColor = '#FF0000';
	click.style.left=x+'px';
	click.style.top=y+'px';
}

click.addEventListener('click',function(){
	console.log("dd")
	count= count+1;
	click.style.backgroundColor = '#0000FF';
	score.innerHTML = "Score : "+count

	if (count > 14) {
		level = level+1;
		console.log(level);
	}
	else if (count > 9) {
		level = level+1;
		console.log(level);
	}
	else if (count > 4) {
		level = level+1;
		console.log(level);
	}
})



setInterval(position,speed);