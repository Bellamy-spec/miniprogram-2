function sayHello(name){
  return `Hello ${name}！`
}
function sayGoodbye(name){
  console.log(`Goodbye ${name}！`)
}
const user = {name: "郭雨健", address: "郑州市中原区", title: "学习者"}

module.exports.sayHello = sayHello
module.exports.sayGoodbye = sayGoodbye
module.exports.user = user