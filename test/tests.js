import isYes from '../isYes.js';
const test = QUnit.test;

test('isYes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const answer = isYes('ye');
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(answer, expected);
});