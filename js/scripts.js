jQuery(function() {



/*let my_switch=false;

$('#my_button').click(function () {

	if (my_switch == false){
		my_switch = true;


	$(this).html ('Click for Kitten') .removeClass('btn-primary') .addClass ('btn-info');

	$('#my_image').slideToggle("slow").attr ('src','images/puppy.png');
} else {
	my_switch=false;

	$(this).html ('Click for Puppy') .removeClass('btn-info') .addClass ('btn-primary');
	$('#my_image').slideToggle("slow").attr ('src','images/kitten.png');
}*/

/*let my_switch=false;

$('#my_button').click(function () {

	if (my_switch == false){
		my_switch = true;


	$(this).html ('Casual') .removeClass('btn-primary') .addClass ('btn-info');

	$('#my_image').attr ('src','images/formal.jpg');
} else {
	my_switch=false;

	$(this).html ('Formal') .removeClass('btn-info') .addClass ('btn-primary');
	$('#my_image').attr ('src','images/casual.jpg');
}*/

var my_switch=false;

$('#my_cf').click(function () {

	if (my_switch == false){
		my_switch = true;

	$(this).html ('/click for casual/') .css('color','#8e2b26');

	 $("#my_image1").attr ('src','images/formal.jpg');
	 $('body').css ('background-color','#d0b3aa');


} else {
	my_switch=false;

	$(this).html ('/click for formal/') .css('color','#875F4F');
	$('#my_image1').attr ('src','images/casual.jpg');
	$('body').css ('background-color','#E7BDAD');

}
	});

	var my_on=false;

	$('#my_gp').click(function () {

		if (my_on == false){
			my_on = true;

		$(this).html ('/click for gothic/') .css('color','#FFEBE1');
    $("#my_image2").attr ('src','images/preppy.jpg');
		$('body').css ('background-color','#71674D');

	} else {
		my_on=false;

		$(this).html ('/click for preppy/') .css('color','#777777');
		$('#my_image2').attr ('src','images/gothic.jpg');
		$('body').css ('background-color','#212121');

	}
		});

		var my_turnon=false;

		$('#my_lb').click(function () {

			if (my_turnon == false){
				my_turnon = true;

			$(this).html ('/click for luxe/') .css('color','#73242B');
	    $("#my_image3").attr ('src','images/bohemian.jpg');
			$('body').css ('background-color','#F8F0DB');

		} else {
			my_turnon=false;

			$(this).html ('/click for bohemian/') .css('color','#d3ab75');
			$('#my_image3').attr ('src','images/luxe.jpg');
			$('body').css ('background-color','#a54133');

		}
			});






});
