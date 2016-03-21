var board = document.getElementById("board");
var size = 4;

var unClick = null;
var beforeColor = null;
function makeChess(tablesize){
    board.style.height=tablesize*100+'px';
    board.style.width=tablesize*100+'px';

    for(var i=0; i<tablesize; i++){
        for(var j=0; j<tablesize; j++){
            var span = document.createElement('span');
            if ((i+j)%2===1) {
                span.className = "black";
            }
            else{
                span.className = "white";
            }
            document.getElementById("board").appendChild(span);
        }
    }
}



    document.getElementById("board").addEventListener("click", function() {

        if(unClick !== null){
            unClick.setAttribute("class", beforeColor);
        }
        
    	beforeColor = event.target.getAttribute("class");
    	event.target.setAttribute("class", "red");
    	unClick = event.target;  
    });


makeChess(size);