(function () {
	'use strict';

	angular.module ('app')

	.directive ('modal', modal);

	function modal ($pathTo) {
		return {
			restrict: 'AE',
			scope: {
				id: '@modalId',
				type: '@modalType',
				title: '@modalTitle',
			},
			transclude: true,
			templateUrl: $pathTo.directivesFolder+'modal.html'
		};
	}
})();
