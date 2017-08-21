// Write your code here
module.exports = class Class {
  constructor(number) {
    this.number = number;
  }

  assignLeader(student) {
    this.leader = student;
  }

  hasLeader(student) {
    return this.leader === student;
  }
}