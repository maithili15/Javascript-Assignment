function sortByLastName(names, order) {
    // Define a custom sorting function based on last names
    const customSort = (a, b) => {
      const lastNameA = a.split(' ').pop(); 
      const lastNameB = b.split(' ').pop(); 
      
      if (order === 'ASC') {
        return lastNameA.localeCompare(lastNameB); // Ascending order
      } else if (order === 'DESC') {
        return lastNameB.localeCompare(lastNameA); // Descending order
      }
    };
    
    // Sort the names array using the custom sort function
    const sortedNames = names.sort(customSort);
    
    return sortedNames;
  }
  
  // Example usage:
  const names = ["asd dsa", "john doe", "fgh bgh"];
  console.log(sortByLastName(names, 'ASC')); 
  console.log(sortByLastName(names, 'DESC')); 
  