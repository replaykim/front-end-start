console.log("exam");

var button = getDom('searchButton');
var inputWhat = getDom('inputWhat');
var more = getDom('more');
var menus = document.querySelectorAll('.nav>li');
//검색 버튼 클릭 이벤트
button.addEventListener('click',buttonAction);
//검색 버튼 클릭 엔터 이벤트
inputWhat.addEventListener('keyup',function(event){
    if (event.keyCode===13) {
        buttonAction(tmpltype);
    }
});
//더보기 버튼 클릭 이벤트
more.addEventListener('click',function(){
    if(pageno===3||result<10){
        window.alert("더 이상 표시 할 것이 없습니다.")
    }else{
        pageno++
        var url = makeUrl(whatsearch,searchMenu)
        makeResult(url,tmpltype);
    }
});
//각 검색메뉴 버튼 클릭 이벤트 
menus[0].addEventListener('click',function(){changeMenu(0);buttonAction()})
menus[1].addEventListener('click',function(){changeMenu(1);buttonAction()})
menus[2].addEventListener('click',function(){changeMenu(2);buttonAction()})
menus[3].addEventListener('click',function(){changeMenu(3);buttonAction()})
menus[4].addEventListener('click',function(){changeMenu(4);buttonAction()})
menus[5].addEventListener('click',function(){changeMenu(5);buttonAction()})