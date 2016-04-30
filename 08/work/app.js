console.log("Scroll");
var a = $('#up')

a.hide();
a.on('click' ,function(event) {
	console.log('up img')	

})
$(window).scroll(function(event){

	console.log('scroll')
});
