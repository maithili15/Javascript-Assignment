function stringsWithNumbers(arr) {
    // Regular expression to check if a string contains a number
    const hasNumber = /\d/;
    
    // Filter out strings with numbers
    const filteredArray = arr.filter(str => hasNumber.test(str));
    
    // Check if the filtered array is empty
    if (filteredArray.length === 0) {
      return []; 
    }
    
    return filteredArray;
  }
  
  // Example usage:
  const inputArray = ["apple", "banana", "123", "orange123", "grape"];
  console.log(stringsWithNumbers(inputArray)); 
  
  // Example with no strings containing numbers:
  const inputArray2 = ["apple", "banana", "grape"];
  console.log(stringsWithNumbers(inputArray2)); 
  