$(function(){
    
    //buton form
    
    var toggleStyle = function(){
        
        var inputFields = $('input[type="text"]');
        
        if( inputFields.css('background-color') === 'rgb(255, 0, 0)'){
                //set background white
            inputFields.css('background-color', 'rgb(255,255,255)');
            }
        else{
                //set background red
            inputFields.css('background-color', 'rgb(255,0,0)');
        }
        }
    $('#ReqAQuoteBtn').click( toggleStyle );
    

    
    })