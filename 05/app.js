console.log("dd")
var str ='';
var wrap = document.getElementById("wrap");
var template = document.getElementById('templateString').innerHTML;
var models = []


for(var count=1;count<10;count++){
	models[count] = count;
	models[count]= []; //new Array  2차배열 선언 

	for(var num=1;num<10;num++){
		models[count][num] = count *num;
		// str += (count+"x"+num+"="+count*num)+"<br>"
		// console.log(count*num);
	}
}
var html = tmpl(template,{list:models})
wrap.innerHTML = html;
// console.log(models);