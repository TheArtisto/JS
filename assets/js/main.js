var array = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum', 'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo,eos', 'Vero, quos'];

function oLetter(letter) {
  return array.filter(function (let) {
    return let.indexOf(letter) > -1;
  })
}

console.log(oLetter('o'));


var date = new Date();
var order = date.getUTCFullYear()+'-'+( + (date.getUTCMonth() + 1))+'-'+( + date.getUTCDate())+'-'+date.getUTCHours()+'-'+date.getUTCMinutes();
console.log(order);

var localOrder = date.getDate()+'-'+(date.getMonth() + 1)+'-'+( + date.getFullYear())+'-'+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds();
console.log(localOrder);


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


 var da = new Date('2019-06-1');

 function getDateAgo(date, days) {
   var da = new Date(date);
   var bDay = new Date(da.setDate(da.getDate() - days));
   return bDay.getDate();
 }

console.log(getDateAgo(da, 1)); 
console.log(getDateAgo(da, 2)); 
console.log(getDateAgo(da, 364));





