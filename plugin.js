(function($, window, document, undefined) {

	'use strict';

	var

		// Plugin name.
		name = 'plugin',

		// Default properties.
		defaults = {
			property : 'value'
		},

		// A function to generate namespaces.
		namespace = function(events) {

			return events ? events.replace(/(\s+|$)/g, '.' + name + '$1') : '.' + name;
		},

		methods = {
			init : function() {

				var

					element = $(this),

					options = element.data(name);

				// Plugin initialization logic.
			},
			destroy : function() {

				return $(this).off(namespace()).removeData(name);
			}
		};

	$.fn[name] = function(options) {

		var

			param = arguments;

		return $(this).each(function() {

			if(typeof options === 'string' && methods.hasOwnProperty(options)) {

				return methods[options].apply(this, Array.prototype.slice.call(param, 1));
			}

			methods.init.call($(this).data(name, $.extend({}, defaults, options)));
		});
	};

	// Plugin version.
	$[name].version = '0.0.0';
})(jQuery, window, document);