//start...
console.log(1);
var todos=[
			{title : "JS공부하기",
			 done:"false"
			}
		];

function getDom(id){
	return  document.getElementById(id);
}

// todoString = document.getElementById('todoString');

function onKeyDown()
{
     if(event.keyCode == 13)
     {
          //TODO : 실행시킬 코드
          console.log("ddd");
        var newtodos = getDom('todoString').value;
        getDom('todoString').value="";
        str = getDom('todolist').innerHTML;
        str +=' \
         <li>\
              <button class="delete">×</button>\
              <input type="checkbox" class="toggle-checked">\
              <span class="text"> '+ newtodos +' </span>\
          </li>';
        getDom('todolist').innerHTML = str;
     }
}
