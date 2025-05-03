{
  // :::: 2-10: Mapped types ::::

  // :: review map method ::
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  // const arrayOfStrings: string[] = ['1', '2', '3', '4', '5'];
  const arrayOfStrings: string[] = arrayOfNumbers.map((num) => num.toString());
  console.log(arrayOfStrings)


  // :: map type ::
  type AreaNumber ={
    height: number;
    width: number
  }

  //lookup type
  type Height = AreaNumber['height'];       

  // type AreaString ={
  //   height: string;
  //   width: string
  // }


  //map type  
  type AreaString ={
    [key in keyof AreaNumber]: string       
  }

 
  //map type  dynamically
  type AreaStringDynamic<T> ={
    [key in keyof T]: T[key]        
  }

  const area1 : AreaStringDynamic<{height: string; width: number}> = {
    height: '100',
    width: 200
  } 











  // 
}