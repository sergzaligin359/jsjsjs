export class Excel {
	constructor(selector, options) {
		if(!selector) return new Error('Error: selector does not exist.');
		this.$el = document.querySelector(selector);
		if(!this.$el) return new Error(`Error: this ${ selector } selector not found.`);
		this.components = options.components || [];
	}
};