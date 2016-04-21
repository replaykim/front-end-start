console.log("Search Api")
var text = document.getElementById('text');
var search = document.getElementById('search');
var template = document.getElementById('searchTemp').innerHTML;
var wrap = document.getElementById('wrap');
// var  add = document.getElementById('add');
var whatsearch = null;
var count
var page

search.addEventListener('click',searchAction);
text.addEventListener('keyup',function(event){
	if (event.keyCode===13) {
		searchAction();
	}
})

function searchAction(){
		whatsearch = text.value;
		count = 10;
		page =1;
		getjson(makeUrl(whatsearch));
}

function getjson(apiurl) {
	getJSON(apiurl, function(res){
		console.log(res);
		render(wrap, template, res.channel.item);
		more();
	});
}

function makeUrl(whatsearch){
	var apikey = '7ba550f8bc7eacb59a95d18b6b6b6291';
	var apiurl = 'https://apis.daum.net/search/vclip?q='+whatsearch+'&apikey='+apikey+'&output=json&result='+count+'&pageno='+page;
	return apiurl;
}

function render(wrap,template,data){

	var html = tmpl(template, {list: data});
	wrap.innerHTML = html;
};

function more(){
	var addbutton = wrap.innerHTML;
	addbutton += '<button onclick ="viewmore()">더보기</button>';
	wrap.innerHTML=addbutton
}

function viewmore(){
	if (page==3) {
		alert("더 이상 표시할것이 없습니다.")
	}
	else{
		if (count ==20) {
			page +=1;
		}
		else{
			count += 10;
		}
		getjson(makeUrl(whatsearch));
	}
}