console.log("game")
var click = document.getElementById('click');
var score = document.getElementById('score');
var miss = document.getElementById('miss');
var level = document.getElementById('level');

var count = 0;
var miscount = 0;
var speed = 1500;
var levelcount = 1;
var successFlag = 0;


function position(){
	var boxheight = gameBox.scrollHeight-50;
	var boxwidth = gameBox.scrollWidth-50;

	var x = makeRandom(0,boxwidth);
	var y = makeRandom(0,boxheight);

	click.style.backgroundColor = '#FF0000';
	click.style.left=x+'px';
	click.style.top=y+'px';
	if (successFlag === 0) {
		miscount = miscount + 1;
	}
	miss.innerHTML = "Miss : " +miscount;
	successFlag = 0;

	if (count === 5) {
		levelup();
	}

	if (count === 10) {
		levelup();
	}
}

function levelup(){
		levelcount =  levelcount + 1;
		level.innerHTML = "level : " + levelcount;
		speed = speed + 500;
}

click.addEventListener('click',function(){
	console.log("dd")
	miscount = 0;
	count= count+1;
	click.style.backgroundColor = '#0000FF';
	score.innerHTML = "Score : "+count
	successFlag = 1;

})



setInterval(position,speed);