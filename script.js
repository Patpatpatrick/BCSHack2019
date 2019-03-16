angular.module("app",[])
.directive("returnFiles", function() {
  return {
    require: "ngModel",
    link: postLink
  };
  function postLink(scope, elem, attrs, ngModel) {
    elem.on("change", function(event) {
      ngModel.$setViewValue(elem[0].files);
    });
  }
})
.controller("ctrl", function($scope, $http) {
  var url = "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/detect";
  var config = {
    headers: { 'Content-type': 'application/octet-stream',
	'Ocp-Apim-Subscription-Key':'8a8b7cb3d1a946eb871dd5900005fdd6'}
  };
  $scope.upload = function(files) {

    var promise = $http.post(url,files[0],config);
    promise.then(function(response){
      //$scope.tags=JSON.stringify(response.data.predictions[0].tagName);
      //$scope.category = JSON.stringify(response.data.predictions[0].tagName);
      console.log(response.data);
      // switch($scope.tags) {
      //    case "metal, foil, tin":
      //    $scope.category = "Recycables"
      //     break;
      //    case "plastic bags, styrofoam, waxed paper, non-recyclable, trash":
      //    $scope.category = "Garbage"
      //     break;
      // }
      //  if (response.data.object[0].object == "metal, foil, tin" || response.data.predictions[0].tagName == "plastic, plastic bottle, plastic container" || response.data.predictions[0].tagName == "glass, glass bottle, jar"){
      //      $scope.category = "Recycables";
      //  }
      // else if (response.data.predictions[0].tagName == "plastic bags, styrofoam, waxed paper, non-recyclable, trash"){
      //     $scope.category = "Garbage";
      // }
      // else if (response.data.predictions[0].tagName == "organic, food, vegetables, fruit, cooked food, grains, egg shells, bones, dairy, coffee grounds, coffee filters, tea"){
      //     $scope.category = "chairs";
      // }
      // else if(response.data.predictions[0].tagName == "cardboard, box"){
      //   $scope.category = "lampposts";
      //  }
      debugger;
      $scope.category = response.data.objects[0].object;

    }).catch(function(errorResponse) {
      $scope.result="Error "+errorRespone.status;
    });
  };
})
