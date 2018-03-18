    var t = (90+66)/2;
    var s = 5;
    var m = Math.pow(s,0.16);
    var f = 35.74 + (0.6215 * t) - (35.75 * m) + [0.4275 * (t * m)];

document.getElementById("windchill").innerHTML= f;
