$(document).ready(function () {
//$('<li>tres</li>').insertBefore($('#lista'))
//$('<li>cuatro</li>').insertAfter($('#lista'))
    $('p:last').insertBefore('p:first')
    //$('#slider p:last').prependTo('#slider');
    $('.slider').css({marginLeft:'-100%'});

     $('#despues').on('click',function(){
        $('.slider').animate({marginLeft:'-200%'},1000,function(){
         $('p:first').insertAfter($('p:last'))
         $('.slider').css({marginLeft:'-100%'})   
        })

        // $('#slider p:first').appendTo('#slider');     
     })
     $('#antes').on('click',function(){
        $('.slider').animate({marginLeft:'0%'},1000,function(){
            $('p:last').insertBefore($('p:first'))
            $('.slider').css({marginLeft:'-100%'})   
           })


        // $('#slider p:last').prependTo('#slider');     
     })

});