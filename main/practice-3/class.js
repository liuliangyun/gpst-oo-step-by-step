// Write your code here
module.exports = class Class {
  constructor(number) {
    this.number = number;
    this.students = [];
    this.teachers = [];
  }

  assignLeader(student) {
    if (this.hasStudent(student)) {
      this.leader = student;
      this.teachers.forEach(t => t.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`));
      return "Assign team leader successfully.";
    }

    return "It is not one of us.";
  }

  hasLeader(student) {
    return this.leader && this.leader.id === student.id;
  }

  appendMember(student) {
    this.students.push(student);
    this.teachers.forEach(t => t.notifyStudentAppended(`${student.name} has joined Class ${this.number}`));
  }
  
  hasStudent(student) {
    return this.students.some(s => s.id === student.id);
  }

  assignTeacher(teacher) {
    this.teachers.push(teacher);
  }
}