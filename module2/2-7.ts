{
  // :::: 2-7 Constraint using key of ::::

  type Vehicle = {
    bike: string;
    car: string;
    ship: string
  }

  //manually taking keys from Vehicle Type, we have created type JanBahon
  type JanBahon = "bike" | "car" | "ship";   

  //We have taken keys using keyof Vehicle Type and created type Bahon 
  type Bahon = keyof Vehicle;

  const transportation1 : JanBahon = "bike";
  const transportation2 : Bahon = "bike";


 //We can get value of a key from an object in following ways:
 // 1. {keyName} = objectName
 // 2. objectName.keyName
 // 3. objectName[keyName] 


 const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) =>{
  return obj[key];
 }

 const user = {
  name: 'Mithun',
  age: 35,
  address: 'Mymensingh'
 }
 const car = {
  brand: 'Toyota',
  price: 500000
 }
 const result1 = getPropertyValue(user, 'name');
 const result2 = getPropertyValue(car, 'price');
























  // 
}