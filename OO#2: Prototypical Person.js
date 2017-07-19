var Person = class Person {
  constructor(name, age){
   this.name = name
   this.age = age
  
  }
}

var Teacher = class Teacher extends Person{
    constructor(name, age, specialty){
    super(name, age)
    this.specialty = specialty
  }
}

var Student = class Student extends Person{
    constructor(name, age, grade, attendance) {
    super(name, age)
    this.grade = grade
    this.attendance = attendance
  }

}

var School = class School {
  constructor(){
    this.teachers = []
    this.students = []
  }
  

  addGrades(grade){
    this.grade.push(grade)
    return this.grade
    
  }
  
  findStudent(index){
  return this.Student[index]
    
  }
  
}

   