console.log("sdf")
	var aa = document.getElementById('gameBox');
	var bb= aa.scrollWidth;

var click = document.getElementById('click');
var count = 0;

var score = document.getElementById('score');


function abc(){
		console.log("dd")

		click.style.backgroundColor = '#0000FF';
}
click.addEventListener('click',function(){
	console.log("dd")
	count= count + 1;
	score.innerHTML = "Score : "+count
	position();
})

function position(){
	var boxheight = gameBox.scrollHeight;
	var boxwidth = gameBox.scrollWidth;

	var x = makeRandom(0,boxwidth);
	var y = makeRandom(0,boxheight);

	click.style.left=x+'px';
	click.style.top=y+'px';
}
function makeRandom(min, max){
	var RandVal = Math.random() * (max- min) + min;
	return Math.floor(RandVal);
}