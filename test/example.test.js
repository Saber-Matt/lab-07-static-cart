// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('take in an array and an id and return an item by that id', (expect) => {

    const array = [
        {
            id: 1,
            name: 'a'
        },
        {
            id: 2,
            name: 'b'
        }
    ];


    const id = 1;

    const expected =
    {
        id: 1,
        name: 'a'
    };
    const actual = findById(array, id);
    expect.deepEqual(actual, expected);

});
