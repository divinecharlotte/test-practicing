import calculator from "./calculator.js";

//Arrange
const message = {
  add: 'sum of 2 numbers is:',
  divide: 'division of 2 numbers is:',
  multiply: 'multiplication of 2 numbers is:'
}

//Act
const sumNumbers = calculator.add(10, 5);
const divideNumbers = calculator.divide(10, 5);
const multiplyNumbers = calculator.multiply(10, 5);

//Assert
describe('calculate', () => {
  test(message.add, () => { expect(sumNumbers).toBe(15) })
  test(message.divide, () => { expect(divideNumbers).toBe(2); })
  test(message.multiply, () => { expect(multiplyNumbers).toBe(50); })
})