// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.members = [];
        this.teachers = [];
    }

    assignLeader(student){
        if(this.members.includes(student.name)){
            this.leader = student.name;
            for(let i=0;i<this.teachers.length;i++){
                this.teachers[i].notifyLeaderAssigned("Jerry become Leader of Class 2");
            }
            return "Assign team leader successfully.";
        }
        return "It is not one of us.";
    }

    appendMember(student){
        this.members.push(student.name);
        for(let i=0;i<this.teachers.length;i++){
            this.teachers[i].notifyStudentAppended("Jerry has joined Class 2");
        }
    }

}