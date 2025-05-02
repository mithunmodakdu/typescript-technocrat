{
  //
  // :::: 1-12 Never,unknown and nullable type ::::

  // nullable type
  const searchName = (value: string | null ) =>{
    if(value){
      console.log('searching')
    }else{
      console.log('There is nothing to search.')
    }
  }
  searchName(null)


  // unknown type
  // during development time we do not know the data type. that's why it is called unknown type
  // during run time we can know the data type
  const getSpeedInMeterPerSecond = (value: unknown) =>{
    if(typeof value === "number"){
      const convertedSpeed = (value * 1000)/3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`)
    }else if(typeof value === 'string'){
      const [result, unit] = value.split(" ")
      const convertedSpeed = (parseFloat(result) * 1000)/3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`)
      
    }else{
      console.log('wrong input')
    }
  }
  getSpeedInMeterPerSecond(1000)
  getSpeedInMeterPerSecond('100 kmh^-1')
  getSpeedInMeterPerSecond(null)


  // never type
  // if data type is never returned it is called never type
  const throwError = (msg: string):never =>{
    throw new Error(msg)
  }
  throwError('very very difficult error')













  // 
}