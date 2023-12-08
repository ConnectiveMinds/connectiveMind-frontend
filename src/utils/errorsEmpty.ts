function isErrorEmpty(obj:any) {
  for (const key in obj) {
    if (obj[key]) {
      return false; // If any value is truthy, return false
    }
  }
  return true; // If all values are falsy or the object is empty, return true
}

export default isErrorEmpty;