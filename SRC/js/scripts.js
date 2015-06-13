$( ".quoi" ).click(function(event) {
	event.stopPropagation();
	event.preventDefault();

	hideSections('true');
    $("#quoi").show();

    unSelectSectionMenu();
	$(".quoi").addClass('active');    
});

$( ".origine" ).click(function() {
	event.stopPropagation();
	event.preventDefault();

	hideSections();
    $("#origine").show();

    unSelectSectionMenu();
    $(".origine").addClass('active');
});

$( ".territoire" ).click(function() {
	event.stopPropagation();
	event.preventDefault();

	hideSections();
    $("#territoire").show();

    unSelectSectionMenu();
    $(".territoire").addClass('active');
});

$( ".mission" ).click(function() {
	event.stopPropagation();
	event.preventDefault();

	hideSections();
    $("#mission").show();

    unSelectSectionMenu();
    $(".mission").addClass('active');
});


function hideSections(param) {
	$("#origine, #quoi, #territoire, #mission").hide();	
}

function unSelectSectionMenu() {
	$( ".origine, .quoi, .territoire, .mission" ).each(function() {
	  if($( this ).hasClass("active")) {
	  	$( this ).removeClass("active");
	  }
	});
}
