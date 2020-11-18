class EmptyStackError extends Error{
  constructor(message) {
    super(message)
    this.name = 'EmptyStackError'
  }
}

class Stack {
  /**
   * @constructor
   */
  constructor() {
    this._elements = []
  }

  /**
   * @public
   * @param element
   * @returns element
   * @description Insert an element at the top of the stack.
   */
  push(element) {
    this._elements.push(element)

    return element
  }

  /**
   * @public
   * @returns element
   * @throws {EmptyStackError}
   * @description Removes an element from the top of the stack.
   */
  pop() {
    if(this.isEmpty()) {
      throw new EmptyStackError('The stack is empty.')
    }

    return this._elements.pop()
  }

  /**
   * @public
   * @returns element
   * @throws {EmptyStackError}
   * @description Returns the top element of the stack.
   */
  peek() {
    if(this.isEmpty()) {
      throw new EmptyStackError('The stack is empty.')
    }

    return this._elements[this._elements.length -1]
  }

  /**
   * @public
   * @returns {boolean}
   * @description Check if the stack is empty or not.
   */
  isEmpty() {
    return !this._elements.length
  }
}

module.exports = Stack
