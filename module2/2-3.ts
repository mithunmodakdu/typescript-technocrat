{
  // 
  // :::: 2-3: Introduction to generics ::::

  // Generic Array Type

  // type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;

  // const RollNumber : number[] = [1, 2, 3];
  // const RollNumber : Array<number> = [1, 2, 3];
  const RollNumber : GenericArray<number> = [1, 2, 3];

  // const mentors : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
  // const mentors : Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
  const mentors : GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

  // const boolArray : boolean[] = [true, false, true];
  // const boolArray : Array<boolean> = [true, false, true];
  const boolArray : GenericArray<boolean> = [true, false, true];


  // const user : GenericArray<object> = [
  //   {
  //     name: 'Mezba',
  //     age: 25
  //   },
  //   {
  //     name: 'Jhankar',
  //     age: '40'
  //   }
  // ];

  const user : GenericArray<{name:string; age:number}> = [
    {
      name: 'Mezba',
      age: 25
    },
    {
      name: 'Jhankar',
      age: 40
    }
  ];


  // Generic Tuple Type
  type GenericTuple<X, Y> = [X, Y];

  // const persons : [string, string] = ['Mr. Rakib', 'Mr. Probash'];
  const persons : GenericTuple<string, string> = ['Mr. Rakib', 'Mr. Probash'];

  const userWithId : GenericTuple<number, {name:string, email:string}> = [123, 
    {
      name: 'Mithun', 
      email: 'mithun@gmail.com'
    }
  ];


























  // 
}