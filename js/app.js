$(document).ready(function() {
	//When mouse enters the div Ryu assumes the ready position
	$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
  })
	//When mouse leaves the div Ryu is still
	.mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  });
});
