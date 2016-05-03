
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');
    turnOpen($target);

    console.log('click card!', num)
});
  console.log(11)
}

function turnOpen($target){
    $target.removeClass('close');
    $target.addClass('open')
}
function turnClose($target){
    $target.removeClass('open');
    $target.addClass('close');
}

var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');
//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();
