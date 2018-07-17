const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, classes){
        super(name, age);
        this.classes = classes;
    }

    introduce(){
        const length = this.classes.length;
        if(length == 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
        let temp = '';
        for(let i=0;i<length-1;i++){
            temp += this.classes[i].number + ',';
        }
        temp += this.classes[length-1].number + '.';
        return super.introduce() + ' I am a Teacher. I teach Class ' + temp;
    }
}