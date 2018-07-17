const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, clazzes){
        super(name, age);
        this.clazzes = clazzes;
        for(let i=0;i<this.clazzes.length;i++){
            this.clazzes[i].teachers.push(this);
        }
    }

    introduce(){
        const length = this.clazzes.length;
        if(length == 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        let temp = '';
        for(let i=0;i<length-1;i++){
            temp += this.clazzes[i].number + ',';
        }
        temp += this.clazzes[length-1].number + '.';
        return super.introduce() + ' I am a Teacher. I teach Class ' + temp;
    }

    isTeaching(student){
        let clazz = student.clazz;
        for(let i=0;i<this.clazzes.length;i++){
            if(this.clazzes[i].number === clazz.number && clazz.members.includes(student.name)){
                return true;
            }
        }
        return false;
    }

    notifyStudentAppended(str){

    }

    notifyLeaderAssigned(str){
    }

}