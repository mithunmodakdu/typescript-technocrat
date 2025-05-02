{
// 
// ::::::::: 1-9 Type alias in typescript ::::::::::
// Type alias basic syntex: type TypeName = data type
// TypeName should start with capital letter

// Type alias in case of object
type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string
}

const student1 : Student = {
  name: "Mithun",
  age: 35,
  gender: "male",
  contactNo: "01919834450",
  address: "Mymensingh"
}

const student2 : Student = {
  name: "Moni",
  age: 33,
  gender: "female",
  address: "Gouripur"
}

const student3 : Student = {
  name: "Mukta",
  age: 20,
  gender: "female",
  address: "Gouripur"
}

// Type alias in case of string, boolean
type UserName = string;
type IsAdmin = boolean;
const userName : UserName = 'Anupom';
const isAdmin : IsAdmin = true;

// Type alias in case of function
type Add = (num1:number, num2:number) => number;
const add : Add = (num1, num2) => num1 + num2;


















// 
}