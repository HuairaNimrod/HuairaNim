$(function(){
/*    //simple click
    $('.boxHolder').on('click', 'li', function(){
        $(this).addClass('greenBox');       
    })
    
    //double click
        $('.boxHolder').on('dblclick', 'li', function(){
        $(this).addClass('orangeBox');
        
    })
  */
    
    //another way
     //html($(this).index()) it adds a number
    $('.boxHolder').on({
        click: function(){
            $(this).addClass('greenBox').html($(this).index());
        },
        
        dblclick: function(){
            $(this).addClass('orangeBox').html($(this).index());
        },
    // opacity
        mouseenter: function(){
            $(this).css('opacity', 0.3);
        },
        mouseleave: function(){
            $(this).css('opacity', 1.0);
        }
        
    }, "li");
    

    
    

})