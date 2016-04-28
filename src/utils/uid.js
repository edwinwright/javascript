/**
 * Creates and returns
 *
 * @param {*} value - Any value.
 * @return {boolean}
 */
export default function uid() {
	return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4);
}
