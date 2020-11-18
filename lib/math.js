class MathExtensions{
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
    if(b < 0) { return 1/a * MathExtensions.pow(a, b+1)}
    if(b === 0 || a === 0 || a ===1 ) { return 1}
    else { return a **=b}
  }

  /**
   * @public
   * @param {number} a
   * @returns {number}
   * @description Calculate the value of a number rounded to the nearest integer.
   */
  static round(a){
    if(a < 0 && MathExtensions.abs(MathExtensions.dec(a)) > 5 ) {
      return MathExtensions.trunc(a-1)
    }
    if(a < 0 && MathExtensions.dec(a) < 5) {
      return MathExtensions.trunc(a)
    }
    if(MathExtensions.dec(a) < 5) {
      return MathExtensions.trunc(a)
    }
    else {
      return a = MathExtensions.trunc(a) + 1
    }
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
    return MathExtensions.abs(10 * (a- (MathExtensions.trunc(a))))
  }
}

module.exports = MathExtensions

