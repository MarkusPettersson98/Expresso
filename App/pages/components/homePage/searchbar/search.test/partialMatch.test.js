import { partialMatch } from '../SearchFilter';

const cutInHalf = (word) => word.slice(0, (word.length / 2));

const fullWord = 'Fullword';
const spongeBobedFullWord = 'FuLlWoRd';
const fullWordWhiteSpace = fullWord + ' ' + fullWord;
const subWord = cutInHalf(fullWord);
const subSpongeBobedWord = cutInHalf(spongeBobedFullWord);

const lowercaseFullWord = fullWord.toLowerCase();
const uppercaseFullWord = fullWord.toUpperCase();


test('match lowercase word against lowercase substring', () => {
    const match = partialMatch(lowercaseFullWord, subWord.toLowerCase());
    expect(match).toBeTruthy();
});

test('match lowercase word against uppercase substring', () => {
    const match = partialMatch(lowercaseFullWord, subWord.toUpperCase());
    expect(match).toBeTruthy();
});

test('match lowercase word against spongebobed substring', () => {
    const match = partialMatch(lowercaseFullWord, subSpongeBobedWord);
    expect(match).toBeTruthy();
});

test('match uppercase word against lowercase substring', () => {
    const match = partialMatch(uppercaseFullWord, subWord.toLowerCase());
    expect(match).toBeTruthy();
});

test('match uppercase word against spongebobed substring', () => {
    const match = partialMatch(uppercaseFullWord, subWord);
    expect(match).toBeTruthy();
});

test('match word with whitespace against itself', () => {
    const match = partialMatch(fullWordWhiteSpace, fullWordWhiteSpace);
    expect(match).toBeTruthy();
});

test('match full word against empty string', () => {
    const match = partialMatch(fullWord, '');
    expect(match).toBeTruthy();
});

test('match full word against number string', () => {
    const match = partialMatch(fullWord, '123');
    expect(match).toBeFalsy();
});

test('match full word against numbers (TypeError)', () => {
    expect(() => partialMatch(fullWord, 123)).toThrow(TypeError);
});