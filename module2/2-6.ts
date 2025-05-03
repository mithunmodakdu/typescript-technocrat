{
  // :::: 2-6: Constraints in typescript ::::

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr. X",
    email: "x@gamil.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "Mr. Y",
    email: "y@gamil.com",
    hasWatch: "Apple Watch",
  });

  

  // const student3 = addCourseToStudent({
  //  emni: 'emni'
  // });

  //Object literal may only specify known properties, and 'emni' does not exist in type '{ id: number; name: string; email: string; }
  // JavaScript Object Literal is a data type used to define objects in JavaScript. It is a syntax for creating an object in JavaScript that is composed of key-value pairs. It is a lightweight and efficient way to create and store data. It is a great way to store related data in an organized manner.

  const student3 = addCourseToStudent({
    id: 444,
    name: "Mr. Z",
    email: "z@gamil.com",
    hasWatch: "Casio Watch",
    emni: 'emni'
  });

  //
}
