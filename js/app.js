var ngDropdownTreeview = angular.module('ngDropdownTreeview', 
    ['ui.router']);


ngDropdownTreeview.controller("ngDropdownTreeview",
    ["$scope",function($scope){

$scope.items=[
    {
        name:"Cloths",
        id:"1",
        children:[
            {
                name:"Leather Jackets",
                id:"11",
                children:[
                {
                    name:"Pleather Jackets",
                    id:"111",
                    children:[
                        {
                            name:"Leather Skirts",
                            id:"112",
                        }
                        ]
                },
                {
                    name:"Kids Cloths",
                    id:"12"
                },
                {
                    name:'Gortex Jackets',
                    id:"13"
                }
                ]
            }
        ]
    },
    {
        name:"Coffee",
        id:"2"
    },
    {
        name:"Shoes",
        id:"3"
    }
    ];


}])

ngDropdownTreeview.directive("ngDropdownTreeview",function(){

    return{

        restrict:"E",
        templateUrl:"partials/dropdownTreeview.html",
        scope:{
            items:'='
        },
        link : function(scope){
            
            scope.getNumber = function (num) {
            return new Array(num);
            }

            scope.changeItem=function(item){
                scope.selectedItem=item;
            }
        }
    }
})