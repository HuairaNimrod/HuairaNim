$(function(){
		// All jQuery code goes here
    //first
    $('li:first').css('background-color', 'rgb(248, 95, 95)');
    
    //last
    $('li:last').css('background-color', 'rgb(230, 230, 250)');
    
    
     //even
    $('li:even').css('background-color', 'rgb(230, 230, 250)');
   
     //odd
    $('li:odd').css('background-color', 'rgb(248, 95, 95)');
   
    // specific
    $('li:eq(2)').css('background-color', 'rgb(0,128,0)');
    
    
	})