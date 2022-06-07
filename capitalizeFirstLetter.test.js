import capitalizeFirstLetter from './capitalizeFirstLetter.js'

//Arrange
const string = 'letter';
const message = 'capitalize first letter of string';


//Act
const capitalizeLetter = capitalizeFirstLetter(string);

//Assert
test(message, () => { expect(capitalizeLetter).toBe('Letter') })