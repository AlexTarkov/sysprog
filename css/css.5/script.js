var t = 0;

function updown(n) {
    //var p = document.getElementById('div3').style.top;
    //alert(n);
    t = t + n;
    document.getElementById('div3').style.top = t;
}

function showhide(b) {
    document.getElementById('divhide').style.visibility = b ? 'visible' : 'hidden';
//    if (b) {
//        document.getElementById('divhide').style.visibility = visible;
//    } esle {
//        document.getElementById('divhide').style.visibility = hidden;
//    }
}