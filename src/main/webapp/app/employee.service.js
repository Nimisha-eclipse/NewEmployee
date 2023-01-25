angular.module('empApp').factory('Employee',Employee);

Employee.$inject = ['$resource'];

function Employee($resource){
	
	var resourceUrl = 'api/employee/:id';
	
	return $resource(resourceUrl,{},{
		'save':{
			method:'PUT'
		}});
}