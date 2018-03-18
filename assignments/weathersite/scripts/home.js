 var section = document.querySelector('section');
        
        /*----Obtaining the JSON-----*/
            var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                  var townsCities = request.response;
                  
                  showCities(townsCities);
                }
        
      
        
        /*-----Hero Information Cards-----*/
            function showCities(jsonObj) {
              var cities = jsonObj['towns'];

              for (var i = 0; i < cities.length; i++) {
                  if (i === 2) { continue; }
                    var myArticle = document.createElement('article');
                    var myH2 = document.createElement('h2');
                    var myPara1 = document.createElement('h4');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');                                     var myPara4 = document.createElement('p');
                    var myPara5 = document.createElement('p');
                    var myList = document.createElement('ul');

                    myH2.textContent = cities[i].name;
                    myPara1.textContent =  cities[i].motto;
                    myPara2.textContent = 'Year founded: ' + cities[i].yearFounded;
                    myPara3.textContent = 'Current population: ' + cities[i].currentPopulation;
                    myPara4.textContent = 'Average rain fall: ' + cities[i].averageRainfall;
                    myPara5.textContent = 'Events:';

                        var cityEvents = cities[i].events;
                        for (var j = 0; j < cityEvents.length; j++) {
                              var listItem = document.createElement('li');
                              listItem.textContent = cityEvents[j];
                              myList.appendChild(listItem);
                            }

                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara1);
                    myArticle.appendChild(myPara2);
                    myArticle.appendChild(myPara3);
                    myArticle.appendChild(myPara4);
                    myArticle.appendChild(myPara5);
                    myArticle.appendChild(myList);

                    section.appendChild(myArticle);
              }
            }
