console.log("util")

var imageTemp = getDom('imageTemp').innerHTML;
var boardTemp = getDom('boardTemp').innerHTML;
var wrap = getDom('wrap');
var loading = getDom('loading');
var whatsearch = null;
var searchArray = ['board','vclip','image','knowledge','blog','cafe'];
var searchMenu ='board';
var tmpltype = boardTemp
var result;
var pageno;

//Dom 얻어오는 함수
function getDom(id) {
 return document.getElementById(id);
}
//로딩이미지 보여주는 함수
function loadingImage(act){
    if (act === true) {
        loading.innerHTML= "<img src='loader.gif'>";
    }
    else if(act===false){
        loading.innerHTML="";
    }
}
//검색버튼과 검색메뉴 버튼 클릭시 초기화 함수
function buttonAction() {
    whatsearch = inputWhat.value;
    result=10;
    pageno=1;
    if (whatsearch==="") {
        window.alert("검색어를 넣어주세요");
    }else{
        var url = makeUrl(whatsearch,searchMenu)
        makeResult(url ,tmpltype);
    }
}
//json을 받아오고 뿌려준다
function makeResult(apiurl,template) {
    loadingImage(true);                 //로딩이미지 실행
    getJSON(apiurl, function(res){
        console.log(res);
        var totalcount=Number(res.channel.totalCount);  //api의 totalCount를 넘버로 받아옴
        render(wrap, template, res.channel.item);
        if (totalcount>(result*pageno)) { //지금 까지 보여준것보다 남은것이 클 경우 more버튼을 보여준다.
            more.style.visibility="visible";
        }
        else{more.style.visibility="hidden";
    }
    loadingImage(false);
    if (totalcount===0) {
        window.alert("검색 결과가 없습니다.")
    }
});
}
//api 주소를 만들어주는 함수
function makeUrl(whatsearch,searchMenu){
    var apikey = '7ba550f8bc7eacb59a95d18b6b6b6291';
    var apiurl = 'https://apis.daum.net/search/'+searchMenu+'?q='+whatsearch+'&apikey='+apikey+'&output=json&result='+result+'&pageno='+pageno;
    return apiurl;
}
//템플릿으로 변경해주는 함수
function render(wrap,template,data){
    var html = tmpl(template, {list: data});

    html = html.replace(/&lt;/gi,"<");
    html = html.replace(/&gt;/gi,">");
    wrap.innerHTML = html;
}
//검색 메뉴를 바꿔주는 함수
function changeMenu(i){
    for(var j = 0;j<menus.length;j++){
        menus[j].setAttribute("class", "");     //모든 검색메뉴 클래스 초기화
    }
    menus[i].setAttribute("class", "active");   //선택된 검색메뉴  active클래스
    searchMenu = searchArray[i]
    if (i===1||i===2) {  //배열 1,2 인경우 tmpl타입을 image설정 tmpl이 more에서 쓰여서 생성   
        tmpltype = imageTemp
    }else{
        tmpltype = boardTemp
    }
}