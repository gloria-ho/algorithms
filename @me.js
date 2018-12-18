// Given an array of twitter handles, print a string that @s all the users.

// ex: ['Vestwell', 'GirlDevelopIt'] -> '@Vestwell @GirlDevelopIt'


// using a for loop, add the @symbol before each username in the array
// return the array joined by spaces
function atUsers(users) {
  for (i in users) {
    users[i] = '@' + users[i];
  }
  return users.join(' ');
}

console.log(atUsers(['Vestwell', 'GirlDevelopIt'])) // '@Vestwell @GirlDevelopIt'