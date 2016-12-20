/**
 * Created by hxsd on 2016/12/6.
 */
myapp.controller('pic_newCtrl',function($scope,$http,$ionicScrollDelegate,dataFactory_pic,$state,$ionicViewSwitcher,$ionicLoading,$timeout){  //,
    $scope.loadMore=function(){
        //向服务器请求数据
        $http.get('json/data_pic.json')
            .success(function(data){
                //将返回的数据，追加到己有数据的后面
                Array.prototype.push.apply($scope.data.productPic,data)
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
    /*
     //控制按钮的显示
     $scope.config={
     showDelete:false,
     showReorder:false
     }
     //删除指定的item方法
     $scope.remove=function(product){
     //首先找到要删除商品在原始商品数组中的索引值
     var index=$scope.data.indexOf(product)
     //调用splice方法来删除它
     $scope.data.splice(index,1)
     }
     //重排按钮的响应方法
     $scope.reOrder=function(product,from,to){
     $scope.data.splice(from,1)//先从元素from处删除
     //再将元素插入到to处
     $scope.data.splice(to,0,product)
     }
     $scope.share=function(product){
     alert(product.title)
     }
     $scope.abc=function(product){
     alert(product.desc)
     }
     */
    // 查询出来要显示在view中的商品数据
    $scope.data = dataFactory_pic.query();

    // 跳转
    $scope.topicDetail = function(product){
        $state.go("pic_detail",{imgsrc:product.imgsrc});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
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