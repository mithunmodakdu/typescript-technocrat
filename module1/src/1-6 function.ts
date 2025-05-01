// ::::::: Function in TypeScript ::::::::
// 1. Normal Function
// 2. Arrow Function

//Normal Function
function add(num1 : number, num2 : number) : number{
  return num1 + num2;
}
add(2, 5)

//Arrow Function
const addWithArrow = (num1 : number, num2 : number) : number => num1 + num2;

// Method: If we use function within an object, it is called method. In the object we have to use normal function because we want to use another property of this object by using this. this can not be used in arrow function
const poorUser = {
  name: 'Mithun',
  balance: 0,
  // function type number
  addBalance (balance: number) : number {
    return this.balance + balance;
  }
}
const richUser = {
  name: 'Probash',
  balance: 5000,
  // function type string
  addBalance (balance: number) : string {
    return `My new balance is ${this.balance + balance}`;
  }
}

//callback function in map
const arr : number[] = [2, 3, 4];
const newArr : number[] = arr.map((element : number) : number => element * element);