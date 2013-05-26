function run() {

//    img = document.getElementById('imgs');
//
//    buf = document.getElementById('sum').value = 'NOT PLACE';
//    img.src = '#';
//
    var mon, srmon, col, sum=0, bool, maxst = 0;
    col=[];
    mon=[];
    srmon=[];
//    bool = false;
//    buf = document.getElementById('bls').value.split(',');
    for (i=0;i<5;i++) {
        col[i]=parseInt(document.getElementById('col'+i).value);
        mon[i]=parseInt(document.getElementById('mon'+i).value);
        srmon[i] = mon[i] / (col[i] + 2);
        maxst = srmon[i] > maxst ? srmon[i] : maxst;
    }

    var rr = getMaxStage(srmon);
    document.getElementById('max').value = rr;

//    alert(maxst);

    for (var i = 0; i < 5; i++) {
        document.getElementById('gw'+i).style.height = (100 * srmon [i] / (maxst==0 ? srmon[i] : maxst))+'px';
        document.getElementById('gw'+i).innerHTML = ~~srmon[i];
    }



}

function getMaxStage(mass) {
    var b;
    var mas = mass.slice();
    for (var i = 0; i < mas.length; i++) {
        for (var l = i+1; l < mas.length; l++) {
            if (mas[i]>mas[l]) {
                b = mas[i];
                mas[i] =  mas[l];
                mas[l] = b;
            }
        }
    }

    var k = 1, ye = 0;
    var max = 0;
    b = mas[0];
    for (var i = 1; i < mas.length; i++) {
        if (b != mas[i]) break;
        k++;
    }
    return k;
}