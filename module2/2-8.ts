{
  // :::: 2-8: Asynchronous typescript ::::

  // creating promise function
  const createPromise = ():Promise<string> =>{
    return new Promise<string>((resolve, reject) =>{
      const data : string = 'something';
      if(data){
        resolve(data);
      }else{
        reject('Failed to load data')
      }
    })
  }

  // calling promise function to show data
  const showData = async(): Promise<string> =>{
    const data : string = await createPromise();
    // console.log(data);
    return data;
  }
  showData();


  // fetching data using asynchronous
  type Todo = { 
    userId: number; 
    id: number; 
    title: string; 
    completed: boolean
  }
  
  const getToDos = async() : Promise<Todo> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    // console.log(data)
    return data;
  }

  getToDos();

























  // 
}