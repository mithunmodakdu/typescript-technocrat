{
  // 
  // :::: 1-11 Ternary, optional chaining & nullish coalescing operator ::::
  
  const age: number = 15;
  // if(age >= 18){
  //   console.log('adult')
  // }else{
  //   console.log('not adult')
  // }

  // Ternary operator
  // For decision making we use Ternary operator
  // Ternary operator is written using question mark (?) and colon (:)
  const isAdult = age >=18 ? 'adult' : 'not adult';
  console.log({isAdult})


  // nullish coalescing operator
  // nullish coalescing operator is written using double question mark (??)
  // When we have to make decision based on null or undefined, we use nullish coalescing operator
  // null, undefined are falsy values
  
  const isAuthenticatedUsingNull = null;
  const result1 = isAuthenticatedUsingNull ?? 'Guest'
  console.log({result1})

  const isAuthenticatedUsingUndefined = undefined;
  const result2 = isAuthenticatedUsingUndefined ?? 'Guest'
  console.log({result2})


  // optional chaining
  // optional chaining is written using question mark (?)
  type User ={
    name: string;
    address: {
      presentAddress: string;
      permanentAddress?: string
    }
  }

  const user: User ={
    name: 'Helon',
    address:{
      presentAddress: 'Jamalpur'
    }
  }

  const permanentAddress = user?.address?.permanentAddress?? 'No Permanent Address';
  console.log({permanentAddress})







  // 
}