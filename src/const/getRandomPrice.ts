export const getRandomPrice = (
  minRangeNumber: number = 1,
  maxRangeNumber: number = 100
) => {
  return Math.floor(Math.random() * maxRangeNumber) + minRangeNumber;
};
