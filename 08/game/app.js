//배열 셔플
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
//카드 배치
function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}
//틀리면 재배치
function initialize(fistcard, seconcard){
        fistcard.removeClass('open');
        fistcard.addClass('close');

        seconcard.removeClass('open');
        seconcard.addClass('close');
}

function addEvent(){

  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');

    console.log('click card!', num);


    if (failFlag === true ) {
        $target.removeClass('close');
        $target.addClass('open');
        $firstCard = $target;
        failFlag =false ;
    }
    else{
        $target.removeClass('close');
        $target.addClass('open');
        $secondCard = $target;
        if ($firstCard.attr('num')===$secondCard.attr('num')) {
            failFlag = true;
            $firstCard.off('click','.card',event);
            $secondCard.off('click','.card',event);
            count += 1
            if (count ===4) {

            }

        }else{
            setTimeout("initialize($firstCard, $secondCard);",500);
            failFlag = true;

        }
    }


});
}
var count = 0;
var $firstCard
var $secondCard
var failFlag = true;
var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');

//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();