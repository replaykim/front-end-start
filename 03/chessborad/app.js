


var board = document.getElementById("board");
var size = prompt("얼마나 큰 체스판을 원하시나요")

function makeChess(tablesize){
board.style.height=tablesize*100+'px';
board.style.width=tablesize*100+'px';
  var spantable = new Array();

    for(var i=0; i<tablesize; i++){
        for(var j=0; j<tablesize; j++){
            // TODO : 여기에 필요한 코드를 작성해주세요.
            console.log("1")
           
             spantable[i] = new Array();

            var span = document.createElement('span');
            spantable[i][j]= span;
            spantable[i][j].className = "black";
  			

            if (i%2===0) {
            	if (j%2===0) {
            		spantable[i][j].className="white";
            	}
            }
            else  {
            	if (j%2===1) {
            		spantable[i][j].className="white";
            	}
            }
         	document.getElementById("board").appendChild(span);	


         
        }
    }

}

    var unClick = null;
    var beforeColor = null;

    document.getElementById("board").addEventListener("click", function() {

        if(unClick !== null){
            unClick.setAttribute("class", beforeColor);
        }
        
    	beforeColor = event.target.getAttribute("class");
    	event.target.setAttribute("class", "red");
    	unClick = event.target;  
    });


makeChess(size);