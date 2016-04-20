/**
 * Adds interaction to a step process component.
 */

export default function WidgetFactory(target) {
  const self = {

    // Store a reference to the target element
    _target: target,

    // Get a reference to the widget items
    _items: Array.from(target.querySelectorAll('[data-widget-item]')),

    // Activates the item according to the specified index
    activate: function activate(index) {
      this._items.forEach(function(item, i) {
        item.classList[i === index ? 'add' : 'remove']('is-active');
      });
    },

  };

  // Bind events
  _bindEvents();

  // Bind events
  function _bindEvents() {
    self._items.forEach(function(item, i) {
      item.addEventListener('click', _handleWidgetItemClick.bind(self, i));
    });
  }

  // Click handler for widget items
  function _handleWidgetItemClick(index, e) {
    e.preventDefault();
    this.activate(index);
  }

  return self;
}



/**
 * Classes are bad - do not use
 *
 */
export class WidgetClass {
	constructor(target) {

    // Store a reference to the target element
    this._target = target;

    // Get a reference to the widget items
    this._items = Array.from(target.querySelectorAll('[data-widget-item]'));

    // Bind events
    this._bindEvents();
	}

  // Activates the item according to the specified index
  activate(index) {
    this._items.forEach(function(item, i) {
      item.classList[i === index ? 'add' : 'remove']('is-active');
    });
  }

  // Bind events
  _bindEvents() {
    this._items.forEach(function(item, i) {
      item.addEventListener('click', this._handleWidgetItemClick.bind(this, i));
    });
  }

  // Click handler for widget items
  _handleWidgetItemClick(index, e) {
    e.preventDefault();
    this.activate(index);
  }

}
