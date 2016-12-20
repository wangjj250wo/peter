/**
 * Created by hxsd on 2016/11/24.
 */
/**
 * Created by hxsd on 2016/11/23.
 */
var myapp=angular.module('myapp',['ionic'])
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText(false);
    $stateProvider
        .state("home",{
            url:'/home',
            templateUrl:"templates/home/home.html",
            controller:"homeCtrl"
        })
        .state("works",{
            url:'/works',
            templateUrl:"templates/works/works.html",
            controller:"worksCtrl"

        })
        .state("home_detail",{
            url:'/home_detail?:leftp',
            templateUrl:"templates/home_detail/home_detail.html",
            controller:"home_detailCtrl"

        })
        .state("tabs_pic",{
            url:'/tabs_pic',
            templateUrl:"templates/tabs_pic/tabs_pic.html",
            abstract:true
        })
        .state("tabs_pic.pic_new",{
            url:'/pic_new',
            views: {"tabs_pic-pic_new":{templateUrl:"templates/pic_ht/pic_new.html",controller:"pic_newCtrl"}}
        })
        .state("pic_detail",{
            url:'/pic_detail?:imgsrc',
            templateUrl:"templates/pic_detail/pic_detail.html",
            controller:"pic_detailCtrl"
        })

        .state("tabs_pic.pic_hot",{
            url:'/pic_hot',
            views: {"tabs_pic-pic_hot":{templateUrl:"templates/pic_ht/pic_hot.html",controller:"pic_newCtrl"}}
        })
        .state("tabs_pic.pic_album",{
            url:'/pic_album',
            views: {"tabs_pic-pic_album":{templateUrl:"templates/pic_ht/pic_album.html",controller:"pic_alumCtrl"}}
        })

        .state("tabs",{
            url:'/tabs',
            abstract:true,      //抽象的，意思是不直接实例化显示这个状态
            templateUrl:"templates/tabs/tabs.html"

        })
        //嵌套的子状态，所以需要使用“父状态，子状态”的语法来配置
        .state("tabs.news",{
            url:'/news?:category',
            views: {"tabs-news":{templateUrl:"templates/news/news.html",controller:"newsCtrl"}}

        })
        .state("tabs.detail", {
            url: "/detail?:title", // 路由传参
            views: {"tabs-news": {templateUrl: "templates/detail/detail.html", controller: "detailCtrl"}}
        })
        .state("tabs.hot",{
            url:'/hot',
            views:{"tabs-hot":{templateUrl:"templates/hot/hot.html",controller:"hotCtrl"}}
        })



    //默认路由
    $urlRouterProvider.otherwise('/home')

})
/*// $q 是内置服务，所以可以直接使用
// 创建一个Service，它负责从服务器请求商品数据，并全局共享
myapp.factory("productFactory", function ($http, $q) {
    return {
        query: function () {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
            $http.get("data.json")
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
                });
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
        } // end query
    };
});*/
// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("json/data.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
myapp.factory("dataFactory_pic", function ($http) {
    var data = {productPic: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("json/data_pic.json").success(function (_data, status, headers, config) {
        data.productPic = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
function MainCtrl($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft(isOpen);
    };
}


myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("json/data.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
function MainCtrl($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft(isOpen);
    };
}


myapp.factory("dataFactory01", function ($http) {
    var data = {productdata: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("json/data4.json").success(function (_data, status, headers, config) {
        data.productdata = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
function MainCtrl($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft(isOpen);
    };
}
