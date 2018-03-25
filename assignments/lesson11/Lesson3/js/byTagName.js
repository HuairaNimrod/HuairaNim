window.onload = function(){
    var elementTag = document.getElementsByTagName('h2');
    
    for(var i = 0; i <elementTag.length; i++){
            elementTag[i].style.borderColor = 'rgb(255, 0, 0)';
            elementTag[i].style.borderWidth = '2px';
            elementTag[i].style.borderStyle = 'solid';
            elementTag[i].style.backgroundColor = 'rgb(255, 0, 0,0.2)';
    }
    
    
}