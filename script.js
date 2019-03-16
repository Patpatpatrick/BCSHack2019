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
  var url = "https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/b02c1152-2060-43be-b687-c02945327bd2/image?iterationId=84347cf4-1f8f-4808-bd9e-80e2c340b444";
  var config = {
    headers: { 'Content-type': 'application/octet-stream',
	'Prediction-Key':'e0ce1a50ac584286810648dcb87d986a'}
  };
  $scope.upload = function(files) {
    var promise = $http.post(url,files[0],config);
    promise.then(function(response){
      $scope.tags=JSON.stringify(response.data.predictions[0].tagName);
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
       if (response.data.predictions[0].tagName == "metal, foil, tin" || response.data.predictions[0].tagName == "plastic, plastic bottle, plastic container" || response.data.predictions[0].tagName == "glass, glass bottle, jar"){
           $scope.category = "Recycables";
       }
      else if (response.data.predictions[0].tagName == "plastic bags, styrofoam, waxed paper, non-recyclable, trash"){
          $scope.category = "Garbage";
      }
      else if (response.data.predictions[0].tagName == "organic, food, vegetables, fruit, cooked food, grains, egg shells, bones, dairy, coffee grounds, coffee filters, tea"){
          $scope.category = "Food Scraps";
      }
      else if(response.data.predictions[0].tagName == "cardboard, box"){
        $scope.category = "Paper";
       }
    }).catch(function(errorResponse) {
      $scope.result="Error "+errorRespone.status;
    });
  };
})
