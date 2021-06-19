const name = 'zhangsan';
const age = 18;

function sayHello(name) {
   console.log("Hello " + name)
}

module.exports.name = name;
module.exports.age = age;
module.exports.sayHello = sayHello;