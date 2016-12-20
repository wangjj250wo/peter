/**
 * Created by hxsd on 2016/11/24.
 */
myapp.controller('newsCtrl',function($timeout,$scope,$http,$ionicScrollDelegate,$state,dataFactory,$ionicViewSwitcher,$stateParams,$ionicPopup,$ionicLoading){
    var category = $stateParams.category;
    if(category==undefined){
       $http.get("json/data.json").success(function(data){
           $scope.newproduct=data;
       })
    }
    console.log(category)
    var data = dataFactory.query();
    $scope.newproduct=[]

    angular.forEach(data.productList, function (item) {
        if (item.category == category) {
            $scope.newproduct.push(item)
        }else{
                newproduct=data.productList

        }

    });


    //下拉刷新时，向服务器请求新的数据
    $scope.doRefresh=function(){
        $http.get('project/js/data.json')
            .success(function(data){
                //使用新的数据替换原有的数据
                $scope.newproduct=data
            })
            .finally(function(){
                //通知框架，下拉刷新结束，让加载图标消失
                $scope.$broadcast('scroll.refreshComplete')
            })
    }
    $scope.loadMore=function(){
        //向服务器请求数据
        $http.get('project/js/data1.json')
            .success(function(data){
                //将返回的数据，追加到己有数据的后面
                Array.prototype.push.apply($scope.newproduct,data)
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
*/
    // 一个确认对话框
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    // 一个确认对话框
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: '请选择分享平台',
            template: '<button class=" icon ion-social-twitter-outline" style="margin-right: 40px;font-size: 32px ;color: #0a9dc7;width: 40px;height: 40px; position: relative;text-align: center;border-radius: 50%;border: none"><span style="font-size: 14px;color: #666666;position: absolute;bottom: -32px;left: 4px;">twitter</span></button><button class=" icon ion-social-facebook-outline" style="margin-right: 40px;font-size: 32px ;color: #0a9dc7;width: 40px;height: 40px; position: relative;text-align: center;border-radius: 50%;border: none"><span style="font-size: 14px;color: #666666;position: absolute;bottom: -32px;left: -2px;">facebook</span></button><button class=" icon ion-social-googleplus-outline" style="font-size: 32px ;color: #0a9dc7;width: 40px;height: 40px; position: relative;text-align: center;border-radius: 50%;border: none"><span style="font-size: 14px;color: #666666;position: absolute;bottom: -32px;left: -5px;">googleplus</span></button>',
            okText:"取消"
        });
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };


    // 查询出来要显示在view中的商品数据
    $scope.data = dataFactory.query();

    // 跳转
    $scope.toDetail = function(product){
        $state.go("tabs.detail",{title:product.title});

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