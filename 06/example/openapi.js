console.log(11)

var apikey = '7ba550f8bc7eacb59a95d18b6b6b6291';
var q ="학교";

var apiurl = 'https://apis.daum.net/search/board?q='+q+'&apikey='+apikey+'&output=json';

getJSON(apiurl, function(res){
	console.log(res);

});

function onKeyDown(){


}