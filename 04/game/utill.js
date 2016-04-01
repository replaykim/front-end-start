function makeRandom(min, max){
	var RandVal = Math.random() * (max- min) + min;
	return Math.floor(RandVal);
}