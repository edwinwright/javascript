/**
 * Removes units from a CSS value and returns a numeric value.
 *
 * @public
 * @static
 * @param {!String} value - The string to strip units from.
 * @return {Number}
 *
 * @example
 * var unitlessValue = HsbcUi.Utils.stripUnits('150px');
 */
export default function stripUnits(value) {
	return parseFloat(/\d+(\.\d+)?/.exec(value), 10);
}
