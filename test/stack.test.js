const Stack = require ('../lib/stack')

describe('Stack:', () => {
  let stack
  beforeEach(() => {
    stack = new Stack()
  })

  describe('push(...):', () => {
    test('should add element and return it. Initially was empty.', () => {
      const result = stack.push(54)

      expect(result).toBe(54)
    })

    test('should add element and return it. Initially was not empty.', () => {
      stack.push(20)
      const result = stack.push(4)

      expect(result).toBe(4)
    })
  })

  describe('pop():', () => {
    test('should remove the element from the top of the stack and return it.', () => {
      stack.push(5)
      const result = stack.pop()

      expect(result).toBe(5)
    })

    test('should throw an error. The stack is empty.', () => {
      const result = () => stack.pop()

      expect(result).toThrowError('The stack is empty.')
    })
  })

  describe('peek():', () => {
    test('should return the top element of the stack.', () => {
      stack.push(20)
      const result = stack.peek()

      expect(result).toBe(20)
    })

    test('should throw an error. The stack is empty.', () => {
      const result = () => stack.peek()

      expect(result).toThrowError('The stack is empty.')
    })
  })

  describe('isEmpty():', () => {
    test('should return true.', () => {
      const result = stack.isEmpty()

      expect(result).toBe(true)
    })

    test('should return false.', () => {
      stack.push(5)
      const result = stack.isEmpty()
        
      expect(result).toBe(false)
    })
  })

  describe('size:', () => {
    test('should return the length of the stack. Initially was empty.', () => {
      const result = stack.size()

      expect(result).toBe(0)
    })

    test('should return the length of the stack. Initially was not empty.', () => {
      stack.push(1)
      stack.push(7)
      const result = stack.size()

      expect(result).toBe(2)
    })
  })
})