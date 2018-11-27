$(document).ready(function(){

    let isYes = false, count = 0 ;
    window.setInterval(function(){
        let button =$(`.button > button`);
        if (isYes){
            button.text('yes');
            $('.traffic-lamp'). css('background-color','green').css('color','white');  
        }
        else{
            button.text('no');
            $('.traffic-lamp').css('background-color','red').css('color','black');
        }
        $('#question1').val(isYes)
        isYes = !isYes;

        $('[name="counter"]').val(++count);
    },1000)


});

// $(document).ready(fungtion(){
//     $('p').click(function (event){
//         alert('it\')
//     }
// }

$(document).ready(function(){
    $("#fade").click(() => {
        $("#panel-fade").fadeIn();
    })

    $("#fadeOut").click(() => {
        $("#panel-fade-out").fadeOut();
    })

    $("#fadeToggle").click(() => {
        $("#panel-fade-toggle").fadeToggle();
    })


    $("#flip").click(() => { 
        $("#panel").slideDown("slow");
    });

    $("#toggle").click( () => {
        $("#panel-toggle").slideToggle();
    })

    $("#hideshow").click( () => {
        if ($("#panel-hideshow").is(":visible")){
            $("#panel-hideshow").hide();
        }else{
            $("#panel-hideshow").show();
        }
    })

    let defaultSize = $('#panel-animation').css('font-size');
    $("#animation").click( () => {
        let fontSize = "1em",
        color = "#0000ff";

        if ($('#panel-animation').css('font-size') == defaultSize) {
            fontSize = "4em";
            color = "#ff0000";
        }

        $('#panel-animation').animate(
            {
                "font-size": fontSize
            }
        ).css("color", color)
    });
});
