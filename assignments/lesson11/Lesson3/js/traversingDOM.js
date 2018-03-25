$(function(){
    // All jQuery code goes here
    //next
    $('#alcoveLogo').next().css('background-color', 'rgb(255, 0, 0, 0.2)');
    
    //next all
    $('.box1').nextAll().css('background-color', 'rgb(255, 0, 0, 0.2)');
    
     //parent()
    $(".navigation > li:eq(2)").parent().css('opacity', '0.3');

	})