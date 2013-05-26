var p=1;
function change() {
    document.getElementById('div'+p).style.visibility = 'hidden';
    p = p % 3 + 1;
    document.getElementById('div'+p).style.visibility = 'visible';
}