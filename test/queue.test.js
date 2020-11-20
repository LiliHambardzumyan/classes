const Queue = require('../lib/queue')

describe('Queue:', () => {
  let queue
  beforeEach(() => {
    queue = new Queue()
  })
  describe('constructor:', () => {
    test('should be instance of Queue:', () => {

      expect(queue).toBeInstanceOf(Queue)
    })

    test('should create queue from given elements:', () => {
      queue = new Queue([5,6,7])

      expect(queue).toBeInstanceOf(Queue)
      expect(queue.size()).toBe(3)
      expect(queue.isEmpty()).toBe(false)
    })
  })


  describe('enqueue(...):', () => {
    test('should add element and return it. Initially was empty.', () => {
      const result = queue.enqueue(23)

      expect(result).toBe(23)
    })

    test('should add element and return it. Initially was not empty.', () => {
      queue.enqueue(15)
      const result = queue.enqueue(2)

      expect(result).toBe(2)
    })
  })

  describe('dequeue:', () => {
    test('should remove and return an element from the front of the queue.', () => {
      queue.enqueue(48)
      queue.enqueue(56)
      const result = queue.dequeue()

      expect(result).toBe(48)
    })

    test('should throw an error. The queue is empty.', () => {
      const result = () => queue.dequeue()

      expect(result).toThrowError('The queue is empty.')
    })
  })

  describe('peek:', () => {
    test('should return an element at front of the queue.', () => {
      queue.enqueue(12)
      queue.enqueue(3)
      const result = queue.peek()

      expect(result).toBe(12)
    })

    test('should throw an error. The queue is empty.', () => {
      const result = () => queue.peek()

      expect(result).toThrowError('The queue is empty.')
    })
  })

  describe('isEmpty:', () => {
    test('should return true.', () => {
      const result = queue.isEmpty()

      expect(result).toBe(true)
    })

    test('should return false.', () => {
      queue.enqueue(26)
      const result = queue.isEmpty()

      expect(result).toBe(false)
    })
  })

  describe('size:', () => {
    test('should return the length of the queue. Initially was empty.', () => {
      const result = queue.size()

      expect(result).toBe(0)
    })

    test('should return the length of the queue. Initially was not empty.', () => {
      queue.enqueue(21)
      queue.enqueue(87)
      const result = queue.size()

      expect(result).toBe(2)
    })
  })

  describe('_deepCopy:', () => {
    test('should copy the nested elements of the queue.', () => {
      const result = Queue._deepCopy([6,7,9])

      expect(result).toEqual([6,7,9])
    })
  })
})