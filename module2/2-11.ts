{
  //:::: 2-11 Utility types ::::
  
  
  type Person ={
    name: string;
    age: number;
    email?: string;
    contactNo: string
  }

  // Pick Type
  type Name = Pick<Person, 'name'>
  type AgeEmail = Pick<Person, 'age'|'email'>

  // Omit Type
  type ContactInfo = Omit<Person, 'name'|'age'>

  // Required Type: Making all required. If any optional, it will be required.
  type PersonRequired = Required<Person>

  // Partial Type: Making all optional. If any required, it will be optional.
  type PersonPartial = Partial<Person>

 
  // Readonly Type
  const person1 : Person = {
    name: 'Mithun',
    age: 35,
    contactNo: '01919'
  }
  person1.name = 'Moni';  // we can re-assign value of name, because Person type is not Readonly

  type PersonReadonly = Readonly<Person>
  const person2 : PersonReadonly = {
    name: 'Mithun',
    age: 35,
    contactNo: '01919'
  }
  person2.name = 'Moni';  // we can not re-assign value of name, because PersonReadonly type is Readonly



  // Record Type
  
  type MyObj = {
    a: string;
    b: string
  }

  const obj: MyObj ={
    a: "aa",
    b: "bb"
  }
  // In the above case we can not add new key and value. If we use Record Type we can add new key and value as more as we want. But all values must be of same type

  // In case of array every index is a number. But in case of object every key must be string. In case of creating Record Type first parameter string is key (always string), second parameter string is value type(may change). value type may be number, boolean etc
  type MyObj1 = Record<string, string>

  const obj1: MyObj1 ={
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd"
  }

  // dynamic record type
  type MyObjDynamic = Record<string, unknown>
  const obj2: MyObjDynamic ={ }












  // 
}