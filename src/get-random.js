const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomOperator = (arr) => {
  const alert = Math.floor(Math.random() * arr.length);
  return arr[alert];
};

export { getRandomInt, getRandomOperator };
