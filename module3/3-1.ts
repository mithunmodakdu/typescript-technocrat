{
  // :::: 3-1: Class and object ::::
  
  // function within class is called method. we have to use normal function here because this does not work with arrow function 

  // class Animal{
  //    name: string;
  //    species: string;
  //    sound: string;

  //   constructor( name:string, species:string, sound:string){
  //     this.name = name;
  //     this.species = species;
  //     this.sound = sound
  //   }

  //   makeSound(){
  //     console.log(`The ${this.name} says ${this.sound}`)
  //   }
  // }


  // we can write above code briefly using parameter properties
  class Animal{
    constructor(public name:string, public species:string, public sound:string){
    }

    makeSound(){
      console.log(`The ${this.name} says ${this.sound}`)
    }
  }

  const dog = new Animal('German Shefard', 'dog', 'ghew ghew');
  dog.makeSound()

























  // 
}