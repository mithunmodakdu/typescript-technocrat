{
  // :::: 3-8 Polymorphism ::::
  // ploy means many, morphism means “the state of being a shape, form, or structure
  
  ////Example-1 Polymorphism: In the following example same getSleep() method has been used in many classes with many output
  //  so getSleep() function is polymorphism here
  class Person {
    getSleep(){
      console.log('I am sleeping 8 hours per day.')
    }
  }

  class Student extends Person {
    getSleep(){
      console.log('I am sleeping 7 hours per day.')
    }
  }

  class Developer extends Person {
    getSleep(){
      console.log('I am sleeping 6 hours per day.')
    }
  }

  const getSleepingHours = (param: Person) =>{
    param.getSleep();
  }


  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1)
  getSleepingHours(person2)
  getSleepingHours(person3)


  //Example-2 Polymorphism: In the following example getArea() function is the polymorphism. Structure of polymorphism must be same. return output may be different.
  class Shape {
    getArea() : number {
      return 0;
    }
  }

  class Circle extends Shape{
    radius: number;

    constructor(radius: number){
      super();
      this.radius = radius;
    }

    getArea() : number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape{
    height: number;
    width: number;

    constructor(height: number, width: number){
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) =>{
    console.log(param.getArea())
  }
  
  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);














  // 
}