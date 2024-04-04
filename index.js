FIRST_POSITION = 0;
const _getFibonacciNumbers = (index) => {
  if (index < 2) {
    return index;
  }
  return _getFibonacciNumbers(index - 1) + _getFibonacciNumbers(index - 2);
};

const _printFibonacciNumbers = (positionQuantity, currentPosition = 0) => {
  if (currentPosition < positionQuantity) {
  console.log(_getFibonacciNumbers(currentPosition));
  _printFibonacciNumbers(positionQuantity, currentPosition + 1);
}
};

_printFibonacciNumbers(15);