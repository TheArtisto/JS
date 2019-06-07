var array = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum', 'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo,eos', 'Vero, quos'];

function oLetter(letter) {
  return array.filter(function (let) {
    return let.indexOf(letter) > -1;
  })
}

console.log(oLetter('o'));



function formDate () {
var m = date.getUTCMonth();
if (m < 10) m = '0' + (m+1);
var d = date.getUTCDate();
if (d < 10) d = '0' + d;
var order = date.getUTCFullYear()+'-'+( + (date.getUTCMonth() + 1))+'-'+( + date.getUTCDate())+'-'+date.getUTCHours()+'-'+date.getUTCMinutes();

return m+'-'+d; 
}

var date = new Date();
var h = date.getUTCHours();
var min = date.getUTCMinutes();
var ye = date.getUTCFullYear();
console.log(ye+'-'+formDate()+','+h+':'+min);



function locDate () {
  var mm = date.getMonth();
  if (mm < 10) mm = '0' + (mm + 1);
  var dy = date.getDate();
  if (dy < 10) dy = '0' + dy;
  var ho = date.getHours();
  if (ho < 10) ho = '0' + ho;
  var mi = date.getMinutes();
  if (mi < 10) mi = '0' + mi;
  var se = date.getSeconds();
  if (se < 10) se = '0' + se;
  var yea = date.getFullYear();
  
  return dy+'.'+mm+'.'+yea+','+ho+':'+mi+':'+se; 
}
var de = new Date();
console.log(locDate(de));






var dat = new Date('2019-06-1');
function getWeekDay(dat) {
  var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
   var toDay = dat.getDay();
   console.log(days[toDay]);
}

getWeekDay(dat);


var dat = new Date('2019-06-1');
function getLocalDay(dat) {
   var tr = dat.getDay();
   if (tr == 0) {
     tr = 7;
   } 
     return tr;
}
 console.log(getLocalDay(dat));


 var da = new Date('2019-06-08');

 function getDateAgo(date, days) {
   var da = new Date(date);
   var bDay = new Date(da.setDate(da.getDate() - days));
   return bDay.getDate();
 }

console.log(getDateAgo(da, 1)); 
console.log(getDateAgo(da, 2)); 
console.log(getDateAgo(da, 364));




