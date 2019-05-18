var name = 'Alexander';
  if (name === '') {
    console.log('Нет имени')
  } else console.log(name);

  


var browser = {
  moz: 'mozila',
  saf: 'safari',
  op: 'opera',
  tor: 'tor',
  ch: function () {
    return 'chrome';
  }
};
console.log(browser);

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

var postNumb = 8899,
  status;
switch (postNumb) {
  case 5566: status = 'Dnepr'; break
  case 7788: status = 'Lugansk'; break
  case 8899: status = 'Poltava'; break
  case 4455: status = 'Kremenchug'; break
  case 3344: status = 'Sumi'; break
  default: status = 'Неизвестный код';
}
console.log(postNumb + ' - ' + status);

var age = 51;
access = age <= 18 ? 'Доступ закрыт' : age <= 50 ? 'Доступ ограничен' : 'Доступ открыт';
console.log(access);

var seven = 0;
do {
  console.log(seven);
  seven++;
} while (seven < 8);


function dot(arg1, arg2, callback) {
  console.log('Число arg1 в степени arg2');
  var bg = Math.pow(arg1, arg2);
  callback(bg);
}

dot(2, 10, function (power) {
  console.log('Результат arg3' + ' = ' + power);
  
});



