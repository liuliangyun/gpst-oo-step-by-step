const Person = require('./person');

module.exports = class Teacher extends Person {
  constructor(name, age, classes) {
    super(name, age);
    this.classes = classes;
  }

  introduce() {
    let classInfo = 'No Class';
    if (this.classes.length > 0) {
      let classNumbers = this.classes.map(c => c.number).join(',');
      classInfo = `Class ${classNumbers}`;
    }
    return `${super.introduce()} I am a Teacher. I teach ${classInfo}.`;
  }
}