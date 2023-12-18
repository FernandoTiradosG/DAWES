import test from 'ava';
import { fizzBuzz } from '../src/fizzbuzz.js'

const expectedResults = {
    1: 1,
    2: 2,
    3: 'fizz',
    4: 4,
    5: 'buzz',
    15: 'fizzbuzz',
    30: 'fizzbuzz',
    35: 'buzz'
}

Object.entries(expectedResults).forEach(([number, expectedResults]) => {
    test(`Should be ${expectedResults} for n = ${number}`, t => {
        const result = fizzBuzz(parseInt(number));
        t.is(result, expectedResults);
    })
})

test('ERROR: Handel number > 0', t => {
    try {
        fizzBuzz(-1);
    } catch(error) {
        t.is(error.message, 'Number must be greater than 0');
    }
});

/*
test('Should return 1', t => {
    const result = fizzBuzz(1);
    t.is(result, 1);
});

test('Should return fizz', t => {
    const result = fizzBuzz(3);
    t.is(result, 'fizz');
});

test('Should return buzz', t => {
    const result = fizzBuzz(5);
    t.is(result, 'buzz');
});

test('Should return fizzbuzz', t => {
    const result = fizzBuzz(15);
    t.is(result, 'fizzbuzz');
});
*/