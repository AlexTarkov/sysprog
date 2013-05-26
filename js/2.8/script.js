function run() {
    var res = [];
    var buf = document.getElementById('coord').value.split(',');
    for (i=0;i<buf.length;i++) {
        res[i]=parseInt(buf[i]);
    }
    var x = res[0];
    var y = res[1];

    if (Math.abs(x) != Math.abs(y)) {
        var m = Math.max(Math.abs(x), Math.abs(y));
        if (m == Math.abs(x)) {
            y = y + (x > 0 ? -1 : 1);
        }

        if (m == Math.abs(y)) {
            x = x + (y > 0 ? 1 : -1);
        }
    }

    if (Math.abs(x) == Math.abs(y)) {
        if (x <= 0 || y <= 0) x = x + (y > 0 ? 1 : -1);
        if (x > 0 && y > 0) y = y - 1;
    }


    document.getElementById('sum').value = x + ', ' + y;

}