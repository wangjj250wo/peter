/**
 * Created by hxsd on 2016/11/25.
 */
myapp.controller('hotCtrl',function($scope,$http,$ionicScrollDelegate,$ionicLoading,$timeout){
    $scope.data=[
        {title:'大疆Mavic Pro VS 精灵 4 Pro',desc:'2016.11.24',imgsrc:'project/images/title_01.jpg'},
        {title:'水下时尚大片怎么拍？专业摄影师来解答',desc:'2016.11.24',imgsrc:'project/images/title_02.jpg'},
        {title:'你需要的专业教程来了 职业修图师讲解中性灰精修',desc:'2016.11.24',imgsrc:'project/images/title_03.jpg'},
        {title:'没有拭镜纸还能用勺子！1分钟清洁镜头妙招',desc:'2016.11.24',imgsrc:'project/images/title_04.jpg'},
        {title:'能让照片美感提升10倍的配色全攻略',desc:'2016.11.24',imgsrc:'project/images/title_05.jpg'},
        {title:'街头摄影六宗罪！',desc:'2016.11.24',imgsrc:'project/images/title_06.jpg'},
        {title:'GoPro Hero5新功能加持：遥测数据显示',desc:'2016.11.24',imgsrc:'project/images/title_07.jpg'},
        {title:'别人再问你为什么要后期 就用这18张图回击！',desc:'2016.11.24',imgsrc:'project/images/title_08.jpg'}
    ]
    //下拉刷新时，向服务器请求新的数据
    $scope.doRefresh=function(){
        $http.get('project/js/data.json')
            .success(function(data){
                //使用新的数据替换原有的数据
                $scope.data=data
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
                Array.prototype.push.apply($scope.data,data)
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