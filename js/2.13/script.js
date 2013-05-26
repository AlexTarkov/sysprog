function run() {

    var P = 4; // количество знаков округления

    //img = document.getElementById('imgs');
    //img.src = '#';

    var tr1, tr2, i;
    res=[];
    bool = false;
    tr1 = document.getElementById('tr1').value.split(',');
    tr2 = document.getElementById('tr2').value.split(',');
    for (i=0;i<tr1.length;i++) {
        tr1[i]=parseInt(tr1[i]);
        tr2[i]=parseInt(tr2[i]);
    }

    var st1 = [], st2 = [];
    for (i = 0; i < 3; i++) {
        var xr = tr1[i*2] - tr1[(i*2+2) % 6];
        var yr = tr1[i*2 + 1] - tr1[(i*2+2 + 1) % 6];
        //st1[i] = roundPlus(Math.sqrt(xr*xr + yr*yr), P);
        st1[i] = xr*xr + yr*yr;

        xr = tr2[i*2] - tr2[(i*2+2) % 6];
        yr = tr2[i*2 + 1] - tr2[(i*2+2 + 1) % 6];
        //st2[i] = roundPlus(Math.sqrt(xr*xr + yr*yr), P);
        st2[i] = xr*xr + yr*yr;
    }

    for (i = 0; i < 3; i++) {
        for (var l = 0; l < 3; l++) {
            if (st1[i]>st1[l]) {
                var b = st1[i];
                st1[i] =  st1[l];
                st1[l] = b;
            }

            if (st2[i]>st2[l]) {
                var b = st2[i];
                st2[i] =  st2[l];
                st2[l] = b;
            }
        }
    }

    //alert(st1 + "|" + st2);

    if (((st1[0] / st2[0]) == (st1[1] / st2[1])) && ((st1[1] / st2[1]) == (st1[2] / st2[2]))) {
        document.getElementById('sum').value = 'Подобны';
    } else {
        document.getElementById('sum').value = 'Не Подобны';
    }
}

function roundPlus(x, n) { //x - число, n - количество знаков
    if(isNaN(x) || isNaN(n)) return false;
    var m = Math.pow(10,n);
    return Math.round(x*m)/m;
}
