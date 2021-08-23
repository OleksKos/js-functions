const a = 15;
console.log(a);
function hello(str) {
  console.log(str);
}
hello('jhgfjhkgkjdfhgkj');
//------------Функции высшего порядка (Higher-order function)-------------------------
console.group('Higher-order function');
const user = {
  age: 54,
  password: "dfdfdfghjh25",
  agreeToterms: true
}

const user2 = {
  age: 36,
  password: "12565",
  agreeToterms: false
}

function checkAge(user) {
  return user.age > 18;
}
function checkPassword(user) {
  return user.password.length > 3;
}
function checkTerms(user) {
  return user.agreeToterms === true;
}

console.log(checkAge(user));
console.log(checkPassword(user));
console.log(checkTerms(user));

function validate(obj, ...params) {
  for (let i = 0; i < params.length; i++) {
    if (params[i](obj) === false) return false;
  }
  return true;
}

console.log(validate(user, checkPassword, checkAge, checkTerms))

//Функция высшего порядка принимает функцию и возвращает функцию
function createValidator(...params) {
  return function (obj) {
    for (let i = 0; i < params.length; i++) {
      if (params[i](obj) === false) return false;
    }
    return true;
  }
}

const validator1 = createValidator(checkPassword, checkAge, checkTerms);
const validator2 = createValidator(checkPassword, checkAge);
console.log(validator1(user2));
console.log(validator2(user2));
console.groupEnd();

//------------------Recursion---------------------
console.group('Recursion');
//Рекурсия - функция, которая вызывает саму себя.
let t = 0;
function recursion() {
  t++;
  // console.log(t);
  if (t === 100) {
    return;
  }
  recursion();
}
recursion();

function cycle() {
  let out = '';
  for (let i = 0; i < 55; i++) {
    out += i + '';
  }
  // console.log(out);
}

cycle();

//recursion
let b = 1;
let out = '';
function recCycle() {
  b++;
  out += b + '';

  if (b > 15) {
    return;
  }
  console.log(b);
  recCycle();
}
recCycle();

function randomInteger(min, max) {
  //случайное число от min до max
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let sumRand = 0;
function moneyRecursion() {
  let randNumber = randomInteger(0, 100);
  console.log('add ' + randNumber);
  sumRand += randNumber;
  console.log('sum ' + sumRand);
  if (sumRand > 300) {
    return;
  }
  moneyRecursion();
}
moneyRecursion()

//Using While for the same situation
function moneyCycle() {
  let sumCycle = 0;
  while (true) {
    let randNumber = randomInteger(0, 100);
    console.log('add-2 ' + randNumber);
    sumCycle += randNumber;
    console.log('sum-2 ' + sumCycle);
    if (sumCycle > 500) {
      return;
    }
  }
}
moneyCycle();

const usersRec = {
  "Ivanov": {
    age: 25,
    parent: {
      "ivanow-2": {
        age: 43
      },
      "ivanow-3": {
        age: 45,
        parent: {
          "sergeev": {
            age: 88,
            parent: {
              "lion": {}
            }
          }
        }
      }
    }
  },
  "Petrov": {
    age: 25,
    parent: {
      'Fedorov': {

      }
    }
  }
}

function userRecursion(obj) {
  if (obj.parent !== undefined) {
    for (let key in obj.parent) {
      console.log(key);
      userRecursion(obj.parent[key]);
    }
  }
}
for (let key in usersRec) {
  userRecursion(usersRec[key])

}
// userRecursion(usersRec.Ivanov)
console.groupEnd();