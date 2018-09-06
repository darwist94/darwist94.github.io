localStorage.visitas = (localStorage.visitas || 0)
localStorage.visitas++;

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

   	var temp = " veces"
    if(localStorage.visitas == 1)
		temp = " vez";
    $("#visitas").html(localStorage.visitas+""+temp) 


    /*$("#sideNav").on("mouseover", function(){
    
    	$(this).fadeToggle();

	});*/

});