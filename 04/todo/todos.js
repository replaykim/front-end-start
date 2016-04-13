//start...
console.log('todolist');

function getDom(id){
	return  document.getElementById(id);
}
var todotemp = getDom('todotemp').innerHTML;
var todolist = getDom('todolist');
// todoString = document.getElementById('todoString');

function onKeyDown()
{
   if(event.keyCode == 13)
   {
        //TODO : 실행시킬 코드;
      var newtodos = getDom('todoString').value;
      getDom('todoString').value="";

      var html = tmpl(todotemp, {list:newtodos});
      todolist.innerHTML = html;
   }
}

function deleteli(event){
  var deltarget = event;
  deltarget.parentElement.remove();
}