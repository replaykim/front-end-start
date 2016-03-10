function adder(){
	for(var count=1;count<101;count++){
		console.log(count);
	}
}

function oddadder(){
	for(var count=1;count<101;count=count+2){
		console.log(count);
	}
}

function kukudan(){
	for(var count=1;count<10;count++){
		for(var num=1;num<10;num++){
			console.log(count*num);
		}
	}
}

function promptadder(){
	var check = true;
	var result = 0;
	while(check){
		var number2 = prompt("더 할 값을 입력하세요");
		if (number2==null) {
			console.log(result);
			check = false;
		}
		else{
			result=result+parseInt(number2, 10);
		}
	}
}
promptadder()