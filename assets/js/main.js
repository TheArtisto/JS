var myFunc = (function () {
  var m = 0;
  return function (i) {
    m = i !== undefined ? i : m;
    return m++;
  }
}());

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
console.log(myFunc(10));
console.log(myFunc());
console.log(myFunc());
console.log(myFunc(100));
console.log(myFunc());
console.log(myFunc());
console.log(myFunc());

function newFunc(k, l, callback) {
  var step = function (k, l) {
    if (l !== 1) {
      return k *= step(k, l - 1);
    }
    else {
      return k;
    }
  };
  callback(step(k, l));
}

newFunc(2, 6, function (rezultat) {
  console.log('result  ' + rezultat);
});

var greeting = function () {
  return 'My name is ' + this.name + ' Im ' + this.age + ' years old';
}

var visitor1 = {
  name: 'Vasya',
  age: 25,
  _gender: 'male',
  greeting: greeting,
  get gender() { 
    return this._gender; 
  },
  set gender(value) { 
    this._gender = value; 
  }
}

var visitor2 = {
  name: 'Victoria',
  age: 22,
  _gender: 'female',
  greeting: greeting,
  get gender() { 
    return this._gender; 
  },
  set gender(value) { 
    this._gender = value; 
  }
}

var visitor3 = {
  name: 'David',
  age: 30,
  _gender: 'male',
  greeting: greeting,
  get gender() { 
    return this._gender; 
  },
  set gender(value) { 
    this._gender = value; 
  }
}


console.log(visitor1.greeting() + '  gender: ' + (visitor1.gender));
console.log(visitor2.greeting() + '  gender: ' + (visitor2.gender));
console.log(visitor3.greeting() + '  gender: ' + (visitor3.gender));





