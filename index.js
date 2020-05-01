$(document).ready(function(){



    $("#button-about").mouseenter(function(){
    var hovered = false;  
        $("#about").fadeIn(500);
        $("#button-about").css("background-color","rgba(255,205,1)");

        $ ("#about").mouseenter(function(){
            hovered = true;
           
        });
            $("#about").mouseleave(function() {
             setTimeout(function() {
            $("#about").fadeOut(100);
             $("#button-about").css("background-color","white");
            hovered = false;
            },1000);
            });

        $("#button-about").mouseleave(function(){
           
            setTimeout(function(){
                if (hovered === false) {
                    console.log("false hover");
                    $("#about").fadeOut(100);
                     $("#button-about").css("background-color","white");
                }
            },500);
        });
    
    });


    $("#button-outreach").mouseenter(function(){
    var hovered = false;  
        $("#outreach").fadeIn(500);
        $("#button-outreach").css("background-color","rgb(255,205,1)");


        $ ("#outreach").mouseenter(function(){
            hovered = true;
         
        });
            $("#outreach").mouseleave(function() {
             setTimeout(function() {
            $("#outreach").fadeOut(100);
              $("#button-outreach").css("background-color","white");

            hovered = false;
            },500);
            });

        $("#button-outreach").mouseleave(function(){
           
            setTimeout(function(){
                if (hovered === false) {
                    console.log("false hover");
                    $("#outreach").fadeOut(100);
                      $("#button-outreach").css("background-color","white");

                }
            },1000);
        });
    
    });

    /*need to figure out how to pass arguments that select dom into jquery */
//WIP
// var NavBarred = function(item){
//     $("#button-"+item).mouseenter(function(){
//     var hovered = false;  
//         $("#"+ item).fadeIn('slow');

//         $ ("#" +item).mouseenter(function(){
//             hovered = true;
//             console.log(hovered);
//         });
//             $("#" +item).mouseleave(function() {
//              setTimeout(function() {
//             $("#"+item).fadeOut('slow');
//             hovered = false;
//             },500);
//             });

//         $("#button-" +item).mouseleave(function(){
//             console.log("left " + hovered);
//             setTimeout(function(){
//                 if (hovered === false) {
//                     console.log("false hover");
//                     $("#"+item).fadeOut('slow');
//                 }
//             },1000);
//         });
    
//     });
// };
// NavBarred(outreach);

});
