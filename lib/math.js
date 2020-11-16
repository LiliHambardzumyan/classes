class MathExtension{
  /**
     * @public
     * @param {number} a
     * @param {number} b
     * @returns {number}
     * @description Compute minimum of two numbers.
     */
  static min(a, b){
    return a < b ? a: b
  }

  /**
     * @public
     * @param {number} a
     * @param {number} b
     * @returns {number}
     * @description Compute maximum of two numbers.
     */
  static max(a, b){
    return a > b ? a : b
  }

  /**
     * @public
     * @param {number} a
     * @returns {number}
     * @description Compute the absolute value of the number.
     */
  static abs(a){
    return a >= 0 ? a : -a
  }

  /**
     * @public
     * @param {number} a
     * @param {number} b
     * @returns {number}
     * @description Calculate the b degree of a.
     */
  static pow (a, b){
    return b === 0 ? 1 : a **=b
  }

  /**
     * @public
     * @param {number} a
     * @returns {number}
     * @description Calculate the value of a number rounded to the nearest integer.
     */
  static round(a){
    if(Math.abs(Math.dec(a)) < 5)
      return Math.trunc(a)
    else
      return a = Math.trunc(a) + 1
  }

  /**
     * @public
     * @param {number} a
     * @returns {number}
     * @description Calculate the integer part of the number.
     */
  static trunc(a){
    return a|0
  }

  /**
     * @public
     * @param {number} a
     * @returns {number}
     * @description Calculate the decimal part of the number.
     */
  static dec(a){
    return 10 * (a- (Math.trunc(a)))
  }
}
module.exports = MathExtension
