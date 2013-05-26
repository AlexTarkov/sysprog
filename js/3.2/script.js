function run() {

//    img = document.getElementById('imgs');
//
//    buf = document.getElementById('sum').value = 'NOT PLACE';
//    img.src = '#';
//
    var st, res, sum=0, bool, maxst = 0;
    res=[];
    st=[];
//    bool = false;
//    buf = document.getElementById('bls').value.split(',');
    for (i=1;i<7;i++) {
        res[i - 1]=parseInt(document.getElementById('ye'+i).value);
        //alert(res[i-1]);
        st[i - 1] = 2013-res[i-1];
        if (maxst < st[i-1]) maxst = st[i-1];
        //alert(st[i-1]);
    }

    var rr = getMaxStage(st);
    document.getElementById('max').value = rr[0] + " ("+rr[1]+")";

//    alert(maxst);

    for (var i = 0; i < 6; i++) {
        document.getElementById('gw'+i).style.height = (100 * st [i] / (maxst==0 ? st[i] : maxst))+'px';
        document.getElementById('gw'+i).innerHTML = st[i];
    }



}

function getMaxStage(mass) {
    var b;
    var mas = mass.slice();
    for (var i = 0; i < mas.length; i++) {
        for (var l = 0; l < mas.length; l++) {
            if (mas[i]>mas[l]) {
                b = mas[i];
                mas[i] =  mas[l];
                mas[l] = b;
            }
        }
    }

    var k = 0, ye = 0;
    var max = 0;

    b = -1;
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] != b) {
            if ( max<k ) {
                //alert(k);
                max = k; ye = mas[i-1];
            }
            k = 1;
            b = mas[i];
        } else {
            k++;
        }
    }
    //alert(k);
    if ( max<k ) {

        max = k; ye = mas[mas.length - 1];
    }

    var rr = [];
    rr[0] = max;
    rr[1] = ye;
    return rr;
}