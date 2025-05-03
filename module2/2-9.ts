{
  // :::: 2-9: Conditional types ::::


  //x type is a conditional type because it depends on the condition of a1 type 
  //y type is a conditional type because it depends on the condition of a1 and b1 types 
  
  // type a1 = null;
  type a1 = number;

  // type b1 = undefined;
  type b1 = string;

  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


 //CheckVehicle type is a conditional type because it depends on the condition of Vehicle type 
 //HasPlane type is a conditional type because it depends on the condition of CheckVehicle type 
  type Vehicle ={
    bike: string;
    car: string;
    ship: string;
    plane: string
  }

  type CheckVehicle<T> = T extends keyof Vehicle ? true : false;
  
  type HasPlane = CheckVehicle<'plane'>;




















  // 
}