var today = new Date();

var hr = today.getMonth();
var min = today.getDay();
var ss = today.getFullYear();
var type1 = hr + '-' + min + '-' + ss;
var type2 = hr + '/' + min + '/' + ss;

document.write('Type one: ' + type1);
document.write('<br/>')
document.write('Type two: ' + type2);