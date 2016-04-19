/**
 * Adds interaction to a step process component.
 * @class
 */
export default class StateMachine {

	/**
	 * Create an instance of a step process component.
	 */
	constructor(options = {}) {

		// Define default options
		const defaults = {
			initialState: 'state1'
		};

		// Assign settings
		this._settings = Object.assign({}, defaults, options);

		// Define the various states
		this._states = [
			'state1',
			'state2',
			'state3',
			'state4'
		];

		// State prototype
		this._statePrototype = {
			enter: utils.noop,
			exit: utils.noop,
			activateHeaderBtn: utils.noop
		};

		// State objects
		this._states = {
			inactive: this._inactiveState(),
			disabled: this._disabledState(),
			active: this._activeState(),
			complete: this._completeState(),
			success: this._successState(),
			error: this._errorState()
		};

	}

	isValidState(state) {
		return this._states.indexOf(state) !== -1;
	}

	/**
	* The list of states that the component can be in.
	*
	* @return {Object} - An array of states.
	*/
	get states() {
		return this._states;
	}


	/**
	 * Initialise the instance.
	 */
	init() {

		// Set the initial state
		this._state = this._states[this._settings.initialState];
		this._state.enter();

	}


	/**
	 * Returns the current state.
	 *
	 * @public
	 * @type {string}
	 *
	 * @example
	 * var currentState = stepProcess.currentState;
	 */
	get currentState() {
		let prop;
		for (prop in this._states) {
			if (this._states[prop] === this._state) {
				return prop;
			}
		}
	}


	/**
	 * Transitions between states.
	 *
	 * @private
	 * @param {Object} newState - One of the state objects defined in the _states property.
	 */
	_changeState(newState) {
		if (this._state !== newState) {
			this._state.exit();
			this._state = newState;
			this._state.enter();
		}
	}

	/**
	 * Transitions between states.
	 *
	 * @private
	 * @param {Object} newState - One of the state objects defined in the _states property.
	 */
	changeState(newState) {
		if (!this.isValidState(newState)) {
			return;
		}


		this._changeState(this._states[newState]);
		return this;
	}

	/**
	 * Creates and returns the disabled state object.
	 *
	 * @private
	 * @return {Object} State object
	 */
	_disabledState() {
		const state = Object.create(this._statePrototype);

		// Function to be run when state is entered
		state.enter = () => {
			this._target.classList.add(this._classes.disabled);
			this._header.setAttribute('aria-disabled', 'true');
			this._header.disabled = true;
			this._blindOpen(this._detail);
			this._config.onDisabled();
		};

		// Function to be run when state is exited
		state.exit = () => {
			this._target.classList.remove(this._classes.disabled);
			this._config.onEnabled();
		};

		return state;
	}

	/**
	 * Creates and returns the inactive state object.
	 *
	 * @private
	 * @return {Object} State object
	 */
	_inactiveState() {
		const state = Object.create(this._statePrototype);

		// Function to be run when state is entered
		state.enter = () => {
			this._header.disabled = false;
			if (this._content.contains(document.activeElement)) {
				this._header.focus();
			}
			this._blindOpen(this._detail);
		};

		state.activateHeaderBtn = () => {
			this._changeState(this._states.active);
		};

		return state;
	}

	/**
	 * Creates and returns the active state object.
	 *
	 * @private
	 * @return {Object} State object
	 */
	_activeState() {
		const state = Object.create(this._statePrototype);

		// Function to be run when state is entered
		state.enter = () => {
			this._target.classList.add(this._classes.active);
			this._header.setAttribute('aria-expanded', 'true');
			this._header.disabled = !this._config.closeBtn;
			this._blindOpen(this._detail);
			this._blindOpen(this._content);
			this._config.onActivated();
		};

		// Function to be run when state is exited
		state.exit = () => {
			this._target.classList.remove(this._classes.active);
			this._header.setAttribute('aria-expanded', 'false');
			this._blindClose(this._content);
			this._config.onDeactivated();
		};

		state.activateHeaderBtn = () => {
			if (this._config.closeBtn) {
				this._changeState(this._states.inactive);
			}
		};

		return state;
	}

	/**
	 * Creates and returns the complete state object.
	 *
	 * @private
	 * @return {Object} State object
	 */
	_completeState() {
		const state = Object.create(this._statePrototype);

		// Function to be run when state is entered
		state.enter = () => {
			this._target.classList.add(this._classes.complete);
			this._header.disabled = false;
			this._blindClose(this._detail);
			this._config.onCompleted();
		};

		// Function to be run when state is exited
		state.exit = () => {
			this._target.classList.remove(this._classes.complete);
		};

		state.activateHeaderBtn = () => {
			this._changeState(this._states.active);
		};

		return state;
	}

	/**
	 * Creates and returns the success state object.
	 *
	 * @private
	 * @return {Object} State object
	 */
	_successState() {
		const state = Object.create(this._statePrototype);

		// Function to be run when state is entered
		state.enter = () => {
			this._target.classList.add(this._classes.success);
			this._header.disabled = true;
			this._blindClose(this._detail);
			this._config.onSuccess();
		};

		// Function to be run when state is exited
		state.exit = () => {
			this._target.classList.remove(this._classes.success);
		};

		return state;
	}

	/**
	 * Creates and returns the error state object.
	 *
	 * @private
	 * @return {Object} State object
	 */
	_errorState() {
		const state = Object.create(this._statePrototype);

		// Function to be run when state is entered
		state.enter = () => {
			this._target.classList.add(this._classes.error);
			this._header.disabled = true;
			this._blindClose(this._detail);
			this._config.onError();
		};

		// Function to be run when state is exited
		state.exit = () => {
			this._target.classList.remove(this._classes.error);
		};

		return state;
	}

}
