
angular.module("myapp")
    .controller("pic_detailCtrl", function ($scope, $stateParams, dataFactory_pic,$ionicPopup,$ionicLoading,$timeout) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var imgsrc = $stateParams.imgsrc;
        console.log(imgsrc)
        // 查询出来要显示在view中的商品数据
        var data = dataFactory_pic.query();
        console.log(data)
        angular.forEach(data.productPic, function (item) {
            if (item.imgsrc == imgsrc) {
                $scope.product = item;
                return false;   // 中断forEach循环 <=> break
            }

        });
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
    });