var today = new Date();

var dd = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][today.getDay()];
var hr = today.getHours();
var min = today.getMinutes();
var ss = today.getSeconds();
var time = hr + ':' + min + ':' + ss;


document.write('Today is: ' + dd);
document.write("<br/>");
document.write('Current time is :' + time);