export default (min = 0, max = 101) => {
  const minResult = Math.ceil(min);
  const maxResult = Math.floor(max);
  return Math.floor(Math.random() * (maxResult - minResult)) + minResult;
};
