{
  // :::: 3-7 Statics in OOP ::::
  // different instance has different memory. increment and decrement results are kept in different memory for different instances.
  // we can use static keyword so that  results can be kept same memory
  // if we use static keyword we can not use this keyword, we have to use class name

  class Counter{
    static count: number = 0;
    
    static increment(){
      return (Counter.count = Counter.count + 1);
    }

    static decrement(){
      return (Counter.count = Counter.count - 1);
    }

  }


  // Before using static
  // const instance1 = new Counter();
  // const instance2 = new Counter();
  // console.log(instance1.increment())  // result 1   
  // console.log(instance1.increment())  // result 2   
  // console.log(instance1.increment())  // result 3  

  // console.log(instance2.increment())  // result 1  
  // console.log(instance2.increment())  // result 2   


  // After using static
  console.log(Counter.increment())  // result 1   
  console.log(Counter.increment())  // result 2   
  console.log(Counter.increment())  // result 3   

  console.log(Counter.increment())  // result 4   
  console.log(Counter.increment())  // result 5   























  // 
}