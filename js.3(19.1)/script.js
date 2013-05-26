function changeArea(x, y, f) {

f = parseInt(f);
x = parseInt(x);
y = parseInt(y);
//alert(x+y);

if(f==0) {//horse
	area[x+2][y+1] = 3;
	area[x+2][y-1] = 3;
	area[x-2][y+1] = 3;
	area[x-2][y-1] = 3;
	
	area[x+1][y+2] = 3;
	area[x-1][y+2] = 3;
	area[x+1][y-2] = 3;
	area[x-1][y-2] = 3;
}

if(f==1) {//elephant
	for(var i=-8;i<10;i++){
		area[x+i][y+i]=3;
		area[x-i][y+i]=3;
	}
}

if(f==2) {//ladya
	for(var i=-8;i<10;i++){
		area[x][y+i]=3;
		area[x+i][y]=3;
	}
}

if(f==3) {//qeuen
	for(var i=-8;i<10;i++){
		area[x][y+i]=3;
		area[x+i][y]=3;
	}
	
	for(var i=-8;i<10;i++){
		area[x+i][y+i]=3;
		area[x-i][y+i]=3;
	}
}

if(f==4) {//king
	for(var i=-1;i<2;i++)
		for(var j=-1;j<2;j++)
			area[x+i][y+j]=3;
}

area[x][y] = 1;

}
	
	
var area = new Array();


function paint() {
	
	var buf = document.getElementById('xy').value;
	var x = buf.charCodeAt(0) - 97;
	//alert('x = ' + x);
	var y = buf.charCodeAt(1) - 49;
	//alert('y = ' + y);
	var fig = document.getElementById('fig').value;

	for (var i=-20;i<20;i++)
		area[i] = new Array();
	changeArea(x, y, fig);
	
	paintArea();
	
}

function paintArea() {

var div = document.getElementById('area');
//div.innerHTML = '!!!';
var s = '';
//div.innerHTML = '<table><tr><td>...</td></tr></table>';

s = s + '<table>';


for(var i=0; i<9; i++){
	//alert('111');
	s=s+ '<tr>';
	for(var j=0;j<9;j++){
		s=s+ '<td class="td'+area[i][j]+'">.</td>';
	}
	s=s+ '</tr>';
}
s = s+ '</table>';
div.innerHTML = s;


}