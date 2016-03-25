//start...
console.log(1);
var todos=[
			{title : "JS공부하기",
			 done:"false"
			}
		];
var todoString = document.getElementById('todoString');

function getDom(id){
	return  document.getElementById('id');
}

function onKeyDown()
{
     if(event.keyCode == 13)
     {
          //TODO : 실행시킬 코드
          console.log("ddd");
        var newtodos = todoString.value;
        todoString.value="";
     }

     getDom()

}
