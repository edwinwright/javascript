/**
 * Tests that the input value is a number and returns the result.
 *
 * @param {*} value - Any value.
 * @return {boolean}
 */
export default function isNumeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}
