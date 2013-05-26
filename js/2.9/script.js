function run() {

    img = document.getElementById('imgs');

    buf = document.getElementById('sum').value = '';
    img.src = '#';

    var buf, res, sum=0, bool;
    res=[];
    bool = false;
    buf = document.getElementById('bls').value.split(',');
    for (i=0;i<buf.length;i++) {
        res[i]=parseInt(buf[i]);
        if (res[i] < 7) bool = true;
        sum+=res[i];
    }
    //document.getElementById('sum').value = sum;
    if (sum==70) {
        document.getElementById('sum').value = sum + ' (500)';
        img.src = '1.jpg';
        return;
    }
    if (sum>=52&& !bool) {
        document.getElementById('sum').value = sum + ' (300)';
        img.src = '2.jpg';
        return;
    }

    if (sum==49) {
        document.getElementById('sum').value = sum + ' (200)';
        img.src = '3.jpg';
        return;
    }
    document.getElementById('sum').value = sum + ' (50)';
    img.src = '4.jpg';

}