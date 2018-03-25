$(function () {
			// This function calculates and returns the distance value
			function calculateDistance(x, y) {
				var symbolPositionX = 97;
				var symbolPositionY = 106;
				return Math.sqrt(((x - symbolPositionX) * (x - symbolPositionX)) + ((y - symbolPositionY) * (y - symbolPositionY)));
			}

			var statusDisplay = $('.status')

			//calculate the distance
            $('.container').on({
                mousemove: function(evt){
                    $('.coordinates').html(evt.offsetX + ',' + evt.offsetY);
                    var distance = calculateDistance(evt.offsetX,evt.offsetY);
                    
                    if(distance > 30){
                        statusDisplay.html("you're too far!!");
                    } else if(distance > 20 && distance < 30){
                        statusDisplay.html("you're close");
                    } else if(distance > 10 && distance < 20){       statusDisplay.html("you're very close!");
                    } else if(distance > 8 && distance < 10){
                        statusDisplay.html("almost there!!");
                    } else if(distance >= 0 && distance < 8){
                        statusDisplay.html("Yay!!! You found the hand, now click!");
                    }
                    
                },
                click: function(evt){
                    if(calculateDistance(evt.offsetX, evt.offsetY) < 8){
                        statusDisplay.html("Congratulations!!")
                    }else{
                        statusDisplay.html("Ooops, You lost the Game!");
                    }
                    $(this).off();
                },
                mouseleave: function(){
                    statusDisplay.html("Find the Hand!");
                    $('.coordinates').html(0,0);
                }
                
                
            })
            

		})