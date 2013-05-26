function run() {

    var st, res, sum=0, bool, maxst = 0;
    res=[0,0,0,0];
    st=[];

    for (i=0;i<10;i++) {
        var buf = document.getElementById('ye'+i).value.split(',');

        var a = parseInt(buf[0]), b = parseInt(buf[1]);
        res[0] += (a==5 && b==5 ? 1 : 0);
        res[1] += (a>3 && b>3 && (a+b<10) ? 1 : 0);
        res[2] += (a>2 && b>2 && (a==3 || b==3) ? 1 : 0);
        res[3] += (a==2 || b==2 ? 1 : 0);
    }

    document.getElementById('max').value = res[0] + '/' + res[1] + '/' + res[2] + '/' + res[3];

//    alert(maxst);

    maxst = Math.max(res[0], res[1], res[2], res[3]);
    //alert(maxst);

    for (var i = 0; i < 4; i++) {
        document.getElementById('gw'+i).style.height = (100 * res[i] / (maxst==0 ? res[i] : maxst))+'px';
        document.getElementById('gw'+i).innerHTML = res[i];
    }
}