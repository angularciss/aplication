myApp.controller('MeuController', function($scope){
	$scope.pessoa = {};
	$scope.dados = [{
		nome : 'Cleber Carlos',
		telefone : '(45) 8794-5445',
		email : 'djeison.hart@gmail.com'
	},{
		nome : 'Marcos Shida',
		telefone : '(34) 7895-4567',
		email : 'marcos@marcos.pt'
	},{
		nome : 'Jéssica Holl',
		telefone : '(55) 8945-0347',
		email : 'jessikinhaw__sk8@hotmail.com'
	}];	

	$scope.enviaDados = function(pessoa){
		
		var minhaPessoa = angular.copy(pessoa);
		$scope.dados.push(minhaPessoa);
		$scope.pessoa = {};

	}

})