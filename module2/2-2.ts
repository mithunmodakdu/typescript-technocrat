{
  // 
  // :::: 2-2: Interface, type vs interface ::::
  // type can be used in both object and primitive data
  // interface can be used in object
  // in case of array and function we should use type
  // in case of object we can use both type and interface

  //creating Type 
  type UserType = {
    name: string;
    age: number
  }
  //creating Intersection Type 
  type UserWithRoleType = UserType & {role: string};


  //creating Interface
  interface UserInterface {
    name: string;
    age: number
  }
  //creating extended Interface
  // Here we extend interface User2, we can also extend type User1
  interface UserWithRoleInterface extends UserInterface{
    role: string
  };

 
 //using Intersection Type 
  const user1 : UserWithRoleType = {
    name: "Mithun",
    age: 35,
    role: 'manager'
  }
 //using extended Interface
  const user2 : UserWithRoleInterface = {
    name: "Gobinda",
    age: 22,
    role: 'area manager'
  }



  // As array and function are one kind of object in JavaScript, we can use interface in case of array and function

  // interface in array
  type RollType = number[];
  interface RollInterface{
    [index : number] : number
  }
  const RollNumber : RollInterface = [1, 2, 3, 4, 5]


  // interface in function
  type AddType = (num1:number, num2:number) => number;
  interface AddInterface{
    (num1:number, num2:number) : number
  }

  const add: AddInterface = (num1, num2) =>{
    return num1 + num2;
  }


  













  // 
}