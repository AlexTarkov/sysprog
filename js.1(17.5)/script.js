var greatvalue;
var col;

function parseInputValues() {
	var buf;
	buf = document.getElementById('inp.array').value.split(',');
	greatvalue = document.getElementById('inp.val').value;
	var res = [];
	for (i=0;i<buf.length;i++) {
		res[i]=(buf[i]=='t');
	}
	return res;
}

function checkSolution(tf, n) {
	var res = tf[0];
	for(i=1;i<tf.length;i++) {
		if(n % 2 == 1) { res=res && tf[i]; } else {res=res || tf[i];}
		n = ~~(n / 2);
	}
	return res;
}

function writeSolution(tf, n) {
	var res = (tf[0]?'t':'f');
	for(i=1;i<tf.length;i++) {
		if(n % 2 == 1) { res=res+' and '; } else {res=res+' or ';}
		res=res+(tf[i]?'t':'f');
		n = ~~(n / 2);
	}
	res = res+(greatvalue=='t'?' = t':' = f')+'\n'
	return res;
}

function compute() {
	document.getElementById('result.formuls').value = '';
	var buf = parseInputValues();
	col=0;
	for(var i=0;i<(1<<(buf.length-1));i++) {
		if (checkSolution(buf,i)==(greatvalue=='t')) {
			document.getElementById('result.formuls').value=document.getElementById('result.formuls').value+writeSolution(buf, i);
			col++;
			}
	}
	document.getElementById('result.col').value = col+'';
}