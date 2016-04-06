/**
 * Removes the specified element from the DOM while leaving its children in place.
 *
 * @param {Element[]} elems - An array of HTML elements.
 * @param {Element} wrapper - The HTML element to wrap each item with.
 *
 * @example
 * var anchors = document.querySelector('a');
 * var wrapper = document.createELement('div');
 * wrap(anchors, wrapper);
 */
function unwrap(wrapper) {
	// get the element's parent node
	const parent = wrapper.parentNode;

	// move all children out of the element
	while (wrapper.firstChild) {
		parent.insertBefore(wrapper.firstChild, wrapper);
	}

	// remove the empty element
	parent.removeChild(wrapper);
}
