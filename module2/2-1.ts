{
  // 
  // :::: 2-1: Type assertion / type narrowing ::::
  // when TypeScript cannot assume or assert about the type, but web developer can assume or assert about the type, then it is called type assertion
  // as is used to assert type


  // Type Assertion in variable declaration
  let anything: any;
  anything = 'Next Level Web Developer';
  anything = 123;
  // (anything as string).
  // (anything as number).



  // Type Assertion in function
  const kgToGm = (value : string | number) : string | number | undefined =>{
    if(typeof value === 'string'){
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if(typeof value === 'number'){
      return value * 1000;
    }
  }

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;


  
  // Type Assertion in try and catch
  type CustomError = {
    message: string;
  }

  try{

  }catch(error){
    console.log((error as CustomError).message)
  }





















  // 
}