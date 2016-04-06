/**
 * Tests that the input value is a number and returns the result.
 *
 * @public
 * @static
 * @param {*} value - Any value.
 * @return {boolean}
 *
 * @example
 * var isValueNumeric = HsbcUi.Utils.isNumeric('123');
 */
static isNumeric(value) {
	return (!isNaN(parseFloat(value)) && isFinite(value)) ? true : false;
}
