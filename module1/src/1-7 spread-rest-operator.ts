{
// :::::: 1-7 Spread and Rest Operator ::::::::::

// Spread Operator in array
const brothers1 : string[] = ['Gobinda', 'Riju', 'Kajol'];
const brothers2 : string[] = ['Chanchal', 'Sonjoy', 'Somapta'];
brothers1.push(...brothers2)

brothers1.push(...brothers2);

// Spread Operator in object
const mentors1 = {
  typeScript: 'Mezba',
  redux: 'Mir',
  dbms: 'Mizan'
};

const mentors2 ={
  prisma: 'Firoz',
  next: 'Tonmoy',
  cloud: 'Nahid'
}

const mentorList ={
  ...mentors1,
  ...mentors2
}


// Rest operator
const greetFriends = (...friends : string[]) =>{
  friends.forEach((friend : String) => console.log(`Hello ${friend}`))
}
greetFriends('Probash', 'Rakib', 'Motaleb', 'Riad');





}