{
  // 
  // :::: 2-4: Generic with Interface ::::

  // Creating Interface named User for using in GenericArray
  type GenericArray<T> = Array<T>;

  // type User = {
  //   name:string;
  //   age:number
  // }
  interface User {
    name:string;
    age:number
  }

  const user : GenericArray<User> = [
    {
      name: 'Mezba',
      age: 25
    },
    {
      name: 'Jhankar',
      age: 40
    }
  ];


  // Creating generic interface named Developer
  interface Developer<T, X = null> {
    name: string,
    computer: {
      brand: string;
      model: string;
      releaseYear: number
    },
    smartWatch: T,
    bike?: X
  }

  type EmilabWatch = {
    brand:string; 
    model:string; 
    display: string
  }
  const poorDeveloper : Developer<EmilabWatch> = {
    name: 'Mithun Modak',
    computer: {
      brand: 'lenevo',
      model: 'LKNJ50',
      releaseYear: 2021
    },
    smartWatch: {
      brand: 'Emilab',
      model: 'KHJJ10',
      display: 'OLED'
    }
  }

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean
  }
  interface YamahaBike {
    model: string;
    engineCapacity: string
  }
  const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: 'Manik',
    computer: {
      brand: 'mac',
      model: 'APP007',
      releaseYear: 2024
    },
    smartWatch: {
      brand: 'apple watch',
      model: 'GOOD25',
      heartTrack: true,
      sleepTrack: true
      
    },
    bike: {
      model: 'Yamaha220',
      engineCapacity: '100cc'
    }
  }


 


























  // 
}