  const obj = { a: 1, b: 2, c: 3 };
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }
  