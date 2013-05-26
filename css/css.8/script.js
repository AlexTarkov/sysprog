//setTimeout(func, 1000);
var bool = true;
var n=0;
var p=1;
var x, y,xy;
var speedx, speedy;

//function topp(obj) { n++; document.getElementById(obj).style.zIndex=n;}
function timerfunc(x,y,xf,yf) {
    if(x > xf) {
        document.getElementById("div3").style.top = yf;
        document.getElementById("div3").style.left = xf;
        document.getElementById("div3").style.position = "static";
        return;
    }

    x =  x + speedx;
    y = y + speedy;

    document.getElementById("div3").style.top = y;
    document.getElementById("div3").style.left = x;


    //alert("lol");
    setTimeout("timerfunc("+x+","+y+","+xf+","+yf+");", 10);
}

function flclk() {
    bool = !bool;
    var color;
    if (bool) color='#ff0000'; else color='#0000ff';
    document.getElementById("div1").style.backgroundColor=color;
    //alert('ppp');
}

function slclk() {
    p++;
    p = p % 3;
    document.getElementById("div2").innerHTML = "<img src='img/"+(p+1)+".jpg'>";
}

function tlclk() {
    document.getElementById("div3").style.position = "static";
    xy = document.getElementById("div3").getBoundingClientRect();
    document.getElementById("div3").style.position = "absolute";
    y = xy.top;
    x = xy.left;
    var xt, yt;
    xt = -200; yt = -200;

    speedx = (x - xt) / 500;
    speedy = (y - xt) / 500;

    timerfunc(xt,yt,x,y)
}