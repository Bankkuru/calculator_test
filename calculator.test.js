const calculator = require('./calculator.js')

    test('Function Add => a+b=c so 2+2=4', () => {
        expect(calculator.add(2,2)).toBe(4)
    });

    test('Function Minus => a-b=c so 2-2=0', () => {
        expect(calculator.minus(2,2)).toBe(0)
    });

    test('Function Multiple => a*b=c so 2*2=4', () => {
        expect(calculator.multiple(2,2)).toBe(4)
    });

    test('Function Divide => a/b=c so 2/2=1', () => {
        expect(calculator.divide(2,2)).toBe(1)
    });