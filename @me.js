//@Me

// Given an array of twitter handles, print a string that @s all the users.

// ex: ['Vestwell', 'GirlDevelopIt'] -> '@Vestwell @GirlDevelopIt'


// using a for loop, create a new array withthe @symbol before each username in the original array
// return the array joined by spaces
function atUsers(users) {
  atUsers = users;
  for (i in users) {
    atUsers[i] = '@' + users[i];
  }
  return atUsers.join(' ');
}

console.log(atUsers(['Vestwell', 'GirlDevelopIt'])); // '@Vestwell @GirlDevelopIt'