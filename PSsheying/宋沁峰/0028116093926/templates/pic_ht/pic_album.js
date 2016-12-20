/**
 * Created by hxsd on 2016/12/7.
 */
myapp.controller('pic_alumCtrl',function($scope,$http,$ionicScrollDelegate,$ionicLoading,$timeout){
    $scope.content=[
        {imgsrc:"project/images/alubm_01.jpg",h1:"生活&梦境",name:"黑夜出没的猫"},
        {imgsrc:"project/images/alubm_02.jpg",h1:"光色之美",name:"清净和雅"},
        {imgsrc:"project/images/alubm_03.jpg",h1:"叶花露珠",name:"清净和雅"},
        {imgsrc:"project/images/alubm_04.jpg",h1:"室内清新、情绪人像",name:"沈跃"},
        {imgsrc:"project/images/alubm_05.jpg",h1:"简单生活",name:"稻草人的童话"}
    ]
    $scope.loadMore=function(){
        //向服务器请求数据
        $http.get('json/data_pic_alubm.json')
            .success(function(data){
                //将返回的数据，追加到己有数据的后面
                Array.prototype.push.apply($scope.content,data)
            })
            .finally(function(){
                //通知框架，上拉刷新结束，隐藏加载图标
                $scope.$broadcast('scroll.infiniteScrollComplete')
            })
    }
    $scope.top=function(){
        //让content滚动到顶部
        $ionicScrollDelegate.scrollTop(true)
    }
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