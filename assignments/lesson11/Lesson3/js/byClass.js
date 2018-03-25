window.onload = function(){
    var elements = document.getElementsByClassName('servicesBtn');
    
    for(var i = 0; i <elements.length; i++){
        if(i % 2 == 0){
            elements[i].style.color = 'rgb(0, 106, 255)';
        }
    }
    
    
}