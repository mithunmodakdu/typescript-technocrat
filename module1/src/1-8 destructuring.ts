{
// :::::::: 1-8 Destructuring ::::::::::::

// Object Destructuring
const user = {
  id: 123,
  name: {
    firstName: 'Mithun',
    middleName: 'Kumer',
    lastName: 'Modak'
  },
  contactNo: '01919834450',
  address: 'Mymensingh, Bangladesh'

}

const {contactNo, name:{middleName}} = user;

// array Destructuring
const myFriends = ['Probash', 'Rakib', 'Motaleb', 'Riad', 'Joy'];
const [a, b, bestFriend] = myFriends;

// to get only bestFriend which is third element
const [,, bestFriend] = myFriends;

const [,, bestFriend, ...rest] = myFriends;





}