$(document).ready(function(){
var hovered = false;
    $("#button-about-us").mouseenter(function(){
        
        $("#about").fadeIn('slow');

        $ ("#about").mouseenter(function(){
            hovered = true;
            console.log(hovered);
        });
            $("#about").mouseleave(function() {
             setTimeout(function() {
            $("#about").fadeOut('slow');
            hovered = false;
            },500);
            });

        $("#button-about-us").mouseleave(function(){
            console.log("left " + hovered);
            setTimeout(function(){
                if (hovered === false) {
                    console.log("false hover");
                    $("#about").fadeOut('slow');
                }
            },1000);
        });
    
    });
});
