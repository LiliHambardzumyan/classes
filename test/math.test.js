const MathExtensions = require('../lib/math')

describe('min():', () => {
  test('should be valid. The first number is smaller.', () => {
    const result = MathExtensions.min(0, 4)
    expect(result).toBe(0)
  })

  test('should be valid. The second number is smaller.', () => {
    const result = MathExtensions.min(15, 5)
    expect(result).toBe(5)
  })

  test('should be valid. One of the numbers is negative.', () => {
    const result = MathExtensions.min(-8, 2)
    expect(result).toBe(-8)
  })

  test('should be valid. Both numbers are negative.', () => {
    const result = MathExtensions.min(-8, -2)
    expect(result).toBe(-8)
  })
})

describe('max():', () => {
  test('should be valid. The first number is bigger.', () => {
    const result = MathExtensions.max(4, 0)
    expect(result).toBe(4)
  })

  test('should be valid. The second number is bigger.', () => {
    const result = MathExtensions.max(5, 15)
    expect(result).toBe(15)
  })

  test('should be valid. One of the numbers is negative.', () => {
    const result = MathExtensions.max(-8, 2)
    expect(result).toBe(2)
  })

  test('should be valid. Both numbers are negative.', () => {
    const result = MathExtensions.max(-8, -2)
    expect(result).toBe(-2)
  })
})

describe('abs():', () => {
  test('should be valid. The number is negative.', () => {
    const result = MathExtensions.abs(-5)
    expect(result).toBe(5)
  })

  test('should be valid. The number is zero.', () => {
    const result = MathExtensions.abs(0)
    expect(result).toBe(0)
  })

  test('should be valid. The number is positive.', () => {
    const result = MathExtensions.abs(5)
    expect(result).toBe(5)
  })
})

describe('pow():', () => {
  test('should be valid. The first number is zero.', () => {
    const result = MathExtensions.pow(0, 5)
    expect(result).toBe(1)
  })

  test('should be valid. The first number is one.', () => {
    const result = MathExtensions.pow(1, 5)
    expect(result).toBe(1)
  })

  test('should be valid. The first number is negative, and the second one is even number.', () => {
    const result = MathExtensions.pow(-2, 2)
    expect(result).toBe(4)
  })

  test('should be valid. The first number is negative, and the second number is odd number.', () => {
    const result = MathExtensions.pow(-2, 3)
    expect(result).toBe(-8)
  })

  test('should be valid. The second number is zero.', () => {
    const result = MathExtensions.pow(2, 0)
    expect(result).toBe(1)
  })

  test('should be valid. The second number is one.', () => {
    const result = MathExtensions.pow(2, 1)
    expect(result).toBe(2)
  })

  test('should be valid. The second number is negative.', () => {
    const result = MathExtensions.pow(2, -2)
    expect(result).toBe(1 / 4)
  })

  test('should be valid. Both numbers are negative, and the second one is even number.', () => {
    const result = MathExtensions.pow(-2, -2)
    expect(result).toBe(1 / 4)
  })

  test('should be valid. Both numbers are negative, and the second one is odd number.', () => {
    const result = MathExtensions.pow(-2, -3)
    expect(result).toBe(-1 / 8)
  })

  test('should be valid. Both numbers are positive.', () => {
    const result = MathExtensions.pow(2, 3)
    expect(result).toBe(8)
  })
})

describe('trunc():', () => {
  test('should be valid. The number is negative.', () => {
    const result = MathExtensions.trunc(-2.65984)
    expect(result).toBe(-2)
  })

  test('should be valid. The number is zero.', () => {
    const result = MathExtensions.trunc(0)
    expect(result).toBe(0)
  })

  test('should be valid. The number is positive.', () => {
    const result = MathExtensions.trunc(5.64985984)
    expect(result).toBe(5)
  })
})

describe('dec():', () => {
  test('should be valid. The number is negative.', () => {
    const result = MathExtensions.dec(-2.65984)
    expect(result).toBe(6.5984)
  })

  test('should be valid. The number is zero.', () => {
    const result = MathExtensions.dec(0)
    expect(result).toBe(0)
  })

  test('should be valid. The number is positive.', () => {
    const result = MathExtensions.dec(2.58426)
    expect(result).toBe(5.8426)
  })
})

describe('round():', () => {
  test('should be valid. The number is negative, and the decimal is more then five', () => {
    const result = MathExtensions.round(-5.6)
    expect(result).toBe(-6)
  })

  test('should be valid. The number is negative, and the decimal is less then five', () => {
    const result = MathExtensions.round(-5.4)
    expect(result).toBe(-5)
  })

  test('should be valid. The number is 0.', () => {
    const result = MathExtensions.round(0)
    expect(result).toBe(0)
  })
  test('should be valid. The number is positive, and the decimal is less than five.', () => {
    const result = MathExtensions.round(2.456)
    expect(result).toBe(2)
  })
  test('should be valid. The number is positive, and the decimal is more than five.', () => {
    const result = MathExtensions.round(2.564)
    expect(result).toBe(3)
  })
})