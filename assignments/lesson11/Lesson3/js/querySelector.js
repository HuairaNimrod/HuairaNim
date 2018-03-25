$(function(){
    var elements = document.querySelectorAll(".navigation > li:nth-child(even) > a");
    
    for(var i = 0; i <elements.length; i++){
            elements[i].style.color = 'rgb(255, 0, 0)';
    }
    
    
})