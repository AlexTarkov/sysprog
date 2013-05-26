function run() {

    img = document.getElementById('imgs');

    buf = document.getElementById('sum').value = 'NOT PLACE';
    img.src = '#';

    var buf, res, sum=0, bool;
    res=[];
    bool = false;
    buf = document.getElementById('bls').value.split(',');
    for (i=0;i<buf.length;i++) {
        res[i]=parseInt(buf[i]);
        if (res[i]<20) bool = true;
        sum+=res[i];
    }
    //document.getElementById('sum').value = sum;
    if (sum==180) {
        document.getElementById('sum').value = sum + '(1)';
        img.src = '1.jpg';
        return;
    }
    if (sum>=130 && !bool) {
        document.getElementById('sum').value = sum + '(2)';
        img.src = '2.jpg';
        return;
    }

    if (sum==120) {
        document.getElementById('sum').value = sum + '(3)';
        img.src = '3.jpg';
        return;
    }

}