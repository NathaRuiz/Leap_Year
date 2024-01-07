const {expect} = require("@jest/globals");
const  LeapYear = require("../index.js");

describe('Tests que comprueban si un año es bisiesto', () => {
    
    const leapYear = new LeapYear();

    const runTest = (numYear, expected_answer) => {
        const answer = leapYear.validate_year(numYear);
        expect(answer).toBe(expected_answer);
    }

    test('Un año no es bisiesto si no es divisible por 4', () => { 
        runTest(1997, false);
     });

     test('Un año es bisiesto si es divisible por 4', () => { 
        runTest(1996, true);
     });

     test('Un año es bisiesto si es divisible por 400', () => { 
        runTest(1600, true);
     });

     test('Un año no es bisiesto si es divisible por 100 pero no por 400', () => { 
        runTest(1800, false);
     });

});