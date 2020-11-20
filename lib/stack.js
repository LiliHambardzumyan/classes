class EmptyStackError extends Error{
  constructor(message) {
    super(message)
    this.name = 'EmptyStackError'
  }
}

class Stack {
  /**
   * @constructor
   * @param {Array} [elements]
   */
  constructor(elements) {
    this._elements = elements ? Stack._deepCopy(elements) : []
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

  /**
   * @public
   * @returns {number}
   * @description Returns the length of the stack.
   */
  size() {
    return this._elements.length
  }

  /**
   * @private
   * @param elements
   * @returns {any}
   * @description Create a copy of the nested elements in the original stack.
   */
  static _deepCopy (elements) {
    return JSON.parse(JSON.stringify(elements))
  }
}

module.exports = Stack
