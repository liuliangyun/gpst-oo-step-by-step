// Write your code here
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.id = this.generateId();
}

Person.prototype.nextId = 1;
Person.prototype.generateId = function () {
  return Person.prototype.nextId++;
};

Person.prototype.introduce = function () {
  return `My name is ${this.name}. I am ${this.age} years old.`;
};

module.exports = Person;