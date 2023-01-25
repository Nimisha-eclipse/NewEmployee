angular.module('crudApp').controller('EmployeeController',EmployeeController);

EmployeeController.inject=['$scope','Employee'];

function EmployeeController($scope,Employee){
	
	$scope.employees = Employee.query();
	$scope.employee ={};
	$scope.buttonText ="Save";
	
	$scope.departmentList = 
	{Code:"AD", Desc: "Administration"},
        {Code:"IT", Desc: "Information technology"},
        {Code:"HD", Desc: "Help Desk"},
        {Code:"HR", Desc: "Human Resource"},
         {Code:"OP", Desc: "Other"};
         
         $scope.validateEmployeet = function(employee){
	            if($rootScope.isNull(employee.id)){
					alertify.alert("Please enter the Employee ID.");
					return false;
				}
				
				if($rootScope.isNull(employee.name)){
					alertify.alert("Please enter the Employee name.");
					return false;
				}
				
         }
	$scope.saveEmployee =function() {
		
		if($scope.employee.id != undefined) {
			Employee.update($scope,employee,function() {
				$scope.employees = Employee.query();
				$scope.employee ={};
	
			});
		} else {
			Employee.save($scope,employee,function() {
				$scope.employees = Employee.query();
				$scope.employee ={};
	
			});
		}
	}
	
	$scope.clear = function(){
				$scope.employee ={};
			};
			
	$scope.deleteEmployee =function(employee) {
		employee.$delete({id:employee.id},function(){
			$scope.employees = Employee.query();
		});
		
		}
	
}