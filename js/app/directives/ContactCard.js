function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ ctrl.makeLowerCase(username) }}</span>',
			'</div>'
		].join(''),
		controller: function($scope) {
			this.makeLowerCase = function(username) {
				return username.toLowerCase();
			};
		},
		controllerAs: 'ctrl',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);
