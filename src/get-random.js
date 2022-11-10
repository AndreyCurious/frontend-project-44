const getRandomInt = (max, min = 0) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1)) + min1;
};

const getRandomOperator = (arr) => {
  const alert = Math.floor(Math.random() * arr.length);
  return arr[alert];
};

export { getRandomInt, getRandomOperator };
