import { variants, egeResult } from './ege';

test('test 0', () => {
    expect(variants(10, 20, 2)).toBe(2);
});

test('test 1', () => {
    expect(egeResult(20, 10, 2)).toBe(28);
});

test('test 2', () => {
    expect(egeResult(20, 10, 3)).toBe(5);
});

test('test 3', () => {
    expect(egeResult(1500, 10, 3)).toBe(3543975);
});

test('test 4', () => {
    expect(egeResult(3000, 10, 3)).toBe(115825790);
});
