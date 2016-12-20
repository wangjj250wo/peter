/**
 * Created by hxsd on 2016/12/1.
 */
myapp.controller('home_detailCtrl',function($scope,$stateParams,dataFactory01,$ionicPopup,$ionicScrollDelegate){
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
    var title = $stateParams.leftp;

    // 查询出来要显示在view中的商品数据
    var data = dataFactory01.query();
    angular.forEach(data.productdata.contents, function (item) {
        if (item.leftp == title) {
            $scope.product = item;
            return false;   // 中断forEach循环 <=> break
        }
    });
    $scope.cards=[
        {touxiang:"project/images/touxiang_sm_01.jpg",name:"加小菲",content:"学习了~",time:"2016-12-01 11:21"},
        {touxiang:"project/images/touxiang_sm_02.jpg",name:"奇本本",content:"撩妹需要懂人心！",time:"2016-12-01 11:21"},
        {touxiang:"project/images/touxiang_sm_03.jpg",name:"迪拍摄影",content:"喜欢有情绪的环境人像。",time:"2016-12-01 11:21"},
        {touxiang:"project/images/touxiang_sm_04.jpg",name:"瑾子",content:"少女心",time:"2016-12-01 11:21"}
    ]
    $scope.top=function(){
        //让content滚动到顶部
        $ionicScrollDelegate.scrollTop(true)
    }

    $scope.showPopup = function() {
        $scope.data = {}
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.wifi" placeholder="请输入评论内容">',
            title: '请输入评论',
            scope: $scope,
            buttons: [
                {text: '取消'},
                {
                    text: '<b>确定</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            e.preventDefault();
                        } else {
                            var time=new Date()
                            $scope.cards.push({"touxiang":"project/images/morentouxiang.jpg","name":"PS游客","content":$scope.data.wifi,"time":time})

                        }
                    }
                }
            ]

        });
    }

})