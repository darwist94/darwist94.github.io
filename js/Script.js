localStorage.visitas = (localStorage.visitas || 0)
localStorage.visitas++;

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $("#visitas").html(localStorage.visitas) 


    /*$("#sideNav").on("mouseover", function(){
    
    	$(this).fadeToggle();

	});*/

});