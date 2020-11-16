class EmptyStackError extends Error{
  constructor(message) {
    super(message)
    this.name = 'EmptyStackError' }
}

class Stack {
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
    return this._elements
  }

  /**
     * @public
     * @returns element
     * @description Removes an element from the top of the stack.
     */
  pop() {
    if(this.isEmpty()) {
      throw new EmptyStackError
    }
    return this._elements.pop()
  }

  /**
     * @public
     * @returns element
     * @description Returns the top element of the stack.
     */
  peek() {
    if(this.isEmpty()) {
      throw new EmptyStackError
    }
    console.log('element is')
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