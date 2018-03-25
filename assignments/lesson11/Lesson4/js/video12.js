$(function(){
    
//append video 12
    $('.coreValues').append("<li><strong>This is brand new!!</strong></li>");
    
//appendTo
    $("<li><strong>This is also great!!</strong></li>").appendTo('.coreValues');
    
//append video 12
    $('.coreValues').prepend("<li><strong>This is before!!</strong></li>");

//prependTo
    $("<li><strong>This is also before!!</strong></li>").prependTo('.coreValues');

   
    
 })
