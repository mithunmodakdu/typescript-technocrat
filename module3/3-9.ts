{
  // :::: 3-9 Abstraction in OOP ::::
  // we can do abstraction in two ways: 1. interface 2. abstract class


  // :: Abstraction using interface ::
  // getting idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void 
  }

  // real implementation
  class Car1 implements Vehicle1  {
    startEngine(): void {
      console.log('I am starting the car engine.')
    }
    stopEngine(): void {
      console.log('I am stopping the car engine.')
    }
    move(): void {
      console.log('I am moving the car.')
    }
    test(){
      console.log('I am testing.')
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move()



  // :: Abstraction using abstract class ::
  // abstract keyword is used to create abstract class
  //We cannot create an instance of an abstract class. But can follow abstract class.

  // getting idea
  abstract class Car2 {
    // Method 'startEngine' cannot have an implementation because it is marked abstract.
    // abstract startEngine(): void {
    //   console.log('I am starting the car engine.')
    // }
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(){
      console.log('Testing.')
    }
    
  }

  // real implementation
  class impleCar extends Car2{
    startEngine(): void {
      console.log('Starting the car engine.')
    }
    stopEngine(): void {
      console.log('Stopping the car engine.')
    }
    move(): void {
      console.log('Moving the car.')
    }
    
  }


  










  // 
}