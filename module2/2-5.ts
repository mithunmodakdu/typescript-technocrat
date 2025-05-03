{
  // :::: 2-5 Function with generics ::::
  
  const createArray = (param : string) : string[] =>{
    return [param];
  }

  // Create array with generic
  const createArrayWithGeneric = <T>(param : T) : T[] =>{
    return [param];
  }

  const res1 = createArray('Bangladesh')
  const resWithGeneric = createArrayWithGeneric<string>('Bangladesh')
  type User = {
    id: number; 
    name: string
  }
  const resWithGenericObject = createArrayWithGeneric<User>({id: 222, name: 'Mithun'})
 
 
  // Create tuple with generic
  const createTupleWithGeneric = <T, Q>(param1:T, param2:Q) : [T, Q] =>{
    return [param1, param2];
  }

  const resTupleGeneric = createTupleWithGeneric<number, string>(1971, 'Bangladesh');
  const resTupleGeneric2 = createTupleWithGeneric<string, {subcontinent: string}>('Bangladesh', {subcontinent: 'Asia'});



  // Create object with generic
  const addCourseToStudent = <T>(student : T) =>{
    const course = "Next Level Web Development";
    return {
      ...student,
      course
    }
  }

  const student1 = addCourseToStudent({name: 'Mr. X', email: 'x@gamil.com', devType:'NLWD'});
  const student2 = addCourseToStudent({name: 'Mr. Y', email: 'y@gamil.com', hasWatch:'Apple Watch'});

 
 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // 
}