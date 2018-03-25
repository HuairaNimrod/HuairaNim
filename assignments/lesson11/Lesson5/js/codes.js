$(function(){
		
    $(document).on({
        //support keys like Esc, enter, shift, alt, ctrl ,etc
        keydown: function(evt){
            $('.keyCode').html( evt.keyCode);
        },
        //does not permit keys like Esc, shift, alt, ctrl ,etc and provides
        //access to character codes
        keypress: function(evt){
            $('.charCode').html( evt.charCode);
        },
        
        
    })
})