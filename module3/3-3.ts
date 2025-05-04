{
  // :::: 3-3: Type guard using typeof & in ::::

  // typeof guard
  type AlphaNumeric = number | string;
  const add = (
    param1: AlphaNumeric,
    param2: AlphaNumeric
  ) =>{
    if(typeof param1 === 'number' && typeof param2 === 'number'){
      return param1 + param2;
    }else{
      return param1.toString() + param2.toString();
    }
  }
  const result1 = add(5, 3);
  const result2 = add('5', 3);
  console.log(result1);
  console.log(result2);


  // in guard 

  type NormalUser ={
    name: string
  }

  type AdminUser ={
    name: string;
    role: string
  }

  const getUser = (user: NormalUser|AdminUser) =>{
    if('role' in user){
      console.log(`My name is ${user.name} and my role is ${user.role}`)
    }else{
      console.log(`My name is ${user.name}. `)
    }
  }

  const normalUser: NormalUser = {
    name: 'Mr. Normal Vaiya'
  }
  const adminUser: AdminUser = {
    name: "Mr. Admin Vaiya",
    role: 'admin'
  }

  getUser(normalUser);
  getUser(adminUser);
  





  // 
}