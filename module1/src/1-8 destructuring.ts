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

// to get first three elements as a, b, bestFriend
const [a, b, bestFriend] = myFriends;

// to get only third element as bestFriend, we have to use two comma(,) to skip two element
const [,, bestFriend] = myFriends;

// to get all elements from bestFriend which is third element, we have to use two comma(,) to skip two element
const [, , bestFriend, ...rest] = myFriends;





}