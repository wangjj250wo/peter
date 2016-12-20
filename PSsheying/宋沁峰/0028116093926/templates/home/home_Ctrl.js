/**
 * Created by hxsd on 2016/11/24.
 */
myapp.controller('homeCtrl',function($scope,dataFactory01,$state,$ionicViewSwitcher,$ionicLoading,$timeout){
    $scope.data = dataFactory01.query();
    // 跳转
    $scope.tohome_Detail = function(product){
        $state.go("home_detail",{leftp:product.leftp});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };
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