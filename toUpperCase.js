const mySolution = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const isShouldBeBig = i === 0 || str[i - 1] === ' ' ? true : false;
    result += isShouldBeBig ? str[i].toUpperCase() : str[i];
  }
  return result;
};

export { mySolution };
