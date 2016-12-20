/**
 * Created by Administrator on 2016/11/27.
 */
myapp.controller('tabsCtrl',function($scope,$state,$ionicViewSwitcher,$ionicLoading,$timeout){


     $scope.categories=[
         {id:'10001',category:'极限摄影'},
         {id:'10002',category:'基础理论'},
         {id:'10003',category:'后期教程'},
         {id:'10005',category:'实战技巧'},
         {id:'10006',category:'分享探讨'},
         {id:'10007',category:'作品心得'},
         {id:'10008',category:'用好器材'},
         {id:'10009',category:'视觉漫游'}
     ]
    $scope.toNews = function(product){
        $state.go("tabs.news",{category:product.category});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("back");    // "forward","back"
    };
// Setup the loader
    $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
    $timeout(function () {
        $ionicLoading.hide();
        $scope.stooges = [{name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}];
    }, 2000);

})