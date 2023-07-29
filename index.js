const { arrayContaining } = require("expect");

  function findMatching(arrayOfDrivers, searchName) {
   const names = arrayOfDrivers.filter(name => name.toLowerCase()=== searchName.toLowerCase())
console.log(arrayOfDrivers);
   return names;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

  function fuzzyMatch(arrayOfDrivers, searchTerm) {
    const names = arrayOfDrivers.filter(orb => orb.startsWith(searchTerm))
    
    return names;
  }
 
 function matchName(arrayOfDrivers, name) {
    const names = arrayOfDrivers.filter(orb => orb.name === name)
    return names;
 }

