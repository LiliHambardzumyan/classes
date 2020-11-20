class EmptyQueueError extends Error {
  constructor(message) {
    super(message)
    this.name = 'EmptyQueueError'
  }
}

class Queue {
  /**
   * @constructor
   * @param {Array} [elements]
   */
  constructor(elements) {
    this._elements = elements ? Queue._deepCopy(elements) : []
  }

  /**
   * @public
   * @param element
   * @returns element
   * @description Insert an element at the end of the queue.
   */
  enqueue(element) {
    this._elements.push(element)

    return element
  }

  /**
   * @public
   * @returns element
   * @throws {EmptyQueueError}
   * @description Removes and returns an element from the front of the queue.
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new EmptyQueueError('The queue is empty.')
    }

    return this._elements.shift()
  }

  /**
   * @public
   * @returns element
   * @throws {EmptyQueueError}
   * @description Get an element at front of the queue.
   */
  peek() {
    if (this.isEmpty()) {
      throw new EmptyQueueError('The queue is empty.')
    }

    return this._elements[0]
  }

  /**
   * @public
   * @returns {number}
   * @description Returns the length of the queue.
   */
  size() {
    return this._elements.length
  }

  /**
   * @public
   * @returns {boolean}
   * @description Check if the queue is empty or not.
   */
  isEmpty() {
    return !this._elements.length
  }

  /**
   * @private
   * @param elements
   * @returns {any}
   * @description Copy the nested data in the original object or array.
   */
  static _deepCopy (elements) {
    return JSON.parse(JSON.stringify(elements))
  }
}

module.exports = Queue



