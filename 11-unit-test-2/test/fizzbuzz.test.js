import { fizzBuzz } from '../src/fizzbuzz.js';

test('Should return 1', () => {
    const result = fizzBuzz(1);
    expect(result).toBe(1);
});

test('Should return fizz', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('fizz');
});

test('Should return buzz', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('buzz');
});

test('Should return fizzbuzz', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('fizzbuzz');
});