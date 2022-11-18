export default (min = 0, max = 101) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
