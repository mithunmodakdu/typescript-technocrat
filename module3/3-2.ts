{
  // :::: 3-2: Inheritance in OOP ::::
  
  class Parent{
    name: string;
    age: number;
    address: string

    constructor(name:string, age:number, address:string){
      this.name = name;
      this.age = age;
      this.address = address

    }

    getSleepTime(numOfHours: number){
      console.log(`${this.name} sleeps ${numOfHours} hours.`)
    }
  }

  class Student extends Parent{
    constructor(name:string, age:number, address:string){
     super(name, age, address)
    }
  }

  const student1 = new Student('Student Mukta', 20, 'Gouripur')
  student1.getSleepTime(10)

  class Teacher extends Parent{
    designation: string

    constructor(name:string, age:number, address:string, designation: string ){
      super(name, age, address);
      this.designation = designation

    }

    getClassLoad(numOfClass: number){
      console.log(`${this.name} takes ${numOfClass} class per week.`)
    }
  }

  const teacher1 = new Teacher('Teacher Mithun', 35, 'shamgonj', 'Jr. Instructor');
  teacher1.getClassLoad(20);
  teacher1.getSleepTime(5)
















  // 
}