function useAge(dateOfBirth) {
    const today = new Date();
    const birthdate = new Date(dateOfBirth);
  
    const age =     (Date.parse(today) - Date.parse(birthdate)) / (365 * 24 * 3600 * 1000);
  
    const ageFull = age.toFixed(1);
    
    return ageFull;

    // const today = new Date();
    // const birthDate = new Date(dateOfBirth)

    // const age = 
    // Date.now(today) - Date.now(birthDate) / (365 * 24 * 3600 * 1000)

    // const ageFull = age.toFixed(1)

    // return ageFull;

  }
  
 
  console.log(useAge('1998-04-21T00:00:00.000+00:00'))