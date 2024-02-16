function toObjectsArray(obj) {
    return Object.entries(obj);
  }
  
  // Test cases
  console.log(toObjectsArray({ a1: 1, a2: 2 })); 
  console.log(toObjectsArray({})); 
  