/**
 * Wraps each element passed to it in the specified DOM element.
 *
 * @public
 * @static
 * @param {Element|Element[]} elems - A single DOM element or an array of DOM elements.
 * @param {Element} wrapper - The DOM element to wrap each item with.
 *
 * @example
 * var anchors = document.querySelector('a');
 * var wrapper = document.createELement('strong');
 * HsbcUi.Utils.wrap(anchors, wrapper);
 */
static wrap(elems, wrapper) {
	// Convert `elems` to an array, if necessary.
	const elements = (!elems.length) ? [elems] : elems;

	// Loops backwards to prevent having to clone the wrapper on the
	// first element (see `child` below).
	for (let i = elements.length - 1; i >= 0; i--) {
		const child = (i > 0) ? wrapper.cloneNode(true) : wrapper;
		const el = elements[i];

		// Cache the current parent and sibling.
		const parent = el.parentNode;
		const sibling = el.nextSibling;

		// Wrap the element (is automatically removed from its current parent).
		child.appendChild(el);

		// If the element had a sibling, insert the wrapper before
		// the sibling to maintain the HTML structure; otherwise, just
		// append it to the parent.
		if (sibling) {
			parent.insertBefore(child, sibling);
		} else {
			parent.appendChild(child);
		}
	}
}
