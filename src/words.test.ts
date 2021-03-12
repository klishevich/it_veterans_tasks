import { numberToWords } from './words';

test('test 0', () => {
    expect(numberToWords(0)).toBe('Zero');
});

test('test 5', () => {
    expect(numberToWords(5)).toBe('Five');
});

test('test 12', () => {
    expect(numberToWords(12)).toBe('Twelve');
});

test('test 24', () => {
    expect(numberToWords(24)).toBe('Twenty Four');
});

test('test 30', () => {
    expect(numberToWords(30)).toBe('Thirty');
});

test('test 100', () => {
    expect(numberToWords(100)).toBe('One Hundred');
});

test('test 130', () => {
    expect(numberToWords(130)).toBe('One Hundred Thirty');
});

test('test 579', () => {
    expect(numberToWords(579)).toBe('Five Hundred Seventy Nine');
});

test('test 1 579', () => {
    expect(numberToWords(1579)).toBe('One Thousand Five Hundred Seventy Nine');
});

test('test 23 450', () => {
    expect(numberToWords(23450)).toBe('Twenty Three Thousand Four Hundred Fifty');
});

test('test 543 893', () => {
    expect(numberToWords(543893)).toBe('Five Hundred Forty Three Thousand Eight Hundred Ninety Three');
});

test('test 102 543 893', () => {
    expect(numberToWords(102543893)).toBe(
        'One Hundred Two Million Five Hundred Forty Three Thousand Eight Hundred Ninety Three'
    );
});

test('test 265 543 893', () => {
    expect(numberToWords(265543893)).toBe(
        'Two Hundred Sixty Five Million Five Hundred Forty Three Thousand Eight Hundred Ninety Three'
    );
});

test('test 121 000 000 000', () => {
    expect(numberToWords(121000000000)).toBe(
        'One Hundred Twenty One Billion'
    );
});
