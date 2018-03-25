$(function(){
    //jQuery goes here
    $('#alcoveLogo').css('opacity', 0.4);
    $('.servicesBtn').css('color', '#FFF');
    $('button').css('border', '1px solid red');
    $('h2').css('border', '1px solid red');
    
    //select by element type
    $('input[name="nameVal"]').css('border', '1px solid red');
    
        //!=
    $('input[name!="nameVal"]').css('border', '1px solid blue');
    
    // *=
    $('input[name*="Num"]').css('border', '1px solid green');
    
    // $= at the end
    $('input[name$="Num"]').css('border', '1px solid purple');
})





/*
$(function(){
    //jqQuery goes here
    
})
*/