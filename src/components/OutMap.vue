<template id="child-Outmap">
  <div id="allmap" :style="style"></div>
</template>

<script>
  export default{
    data(){
      return{
        style:{
          width:'100%',
          height:this.om.height+'px'
        },
        data_info:[]
      }
    },
    props:['om'],    //通过props属性，将从父级得到的数据传给子级
    mounted(){
      this.feathData();
    },
    methods:{
      feathData(){
        var _this=this;
        // this.$http.get('../data/OutMap.txt').then((res)=>{
          var res = [{"storeName":"新竹店","address":"新竹小区44栋","longitude":"108.3548919668","latitude":"22.821566423099725"},{"storeName":"商城总仓","address":"新竹小区44栋","longitude":"108.3548919668","latitude":"22.821566423099725"},{"storeName":"伶珑店","address":"仙葫开泰路伶龙市场内南外铺第68号","longitude":"108.4444","latitude":"22.818404239252168"},{"storeName":"开泰店","address":"仙葫开泰路63号金地世家1栋A23号1楼","longitude":"108.44528","latitude":"22.81803159753781"},{"storeName":"越秀店","address":"越秀路1号凯越国际9号楼一层2号商铺","longitude":"","latitude":""},{"storeName":"防城富康店","address":"防城镇金狮街公安局宿舍一楼铺面","longitude":"","latitude":""},{"storeName":"防城5号店","address":"辉达山水豪庭小区内","longitude":"","latitude":""},{"storeName":"防城4号店","address":"珍珠路桂海东盟小区","longitude":"","latitude":""},{"storeName":"防城3号店","address":"丽江花园1-26商铺","longitude":"","latitude":""},{"storeName":"防城2号店","address":"防东路27号","longitude":"","latitude":""},{"storeName":"防城1号店","address":"阳光海岸3期南门2803号","longitude":"","latitude":""},{"storeName":"上思店","address":"","longitude":"","latitude":""},{"storeName":"东兴金冠店","address":"东兴市金冠路14号—5号铺面","longitude":"","latitude":""},{"storeName":"总部","address":"","longitude":"","latitude":""}]
  
          _this.data_info=eval(res);
          // console.log(res.data);
          // console.log(_this.data_info);
          // console.log(_this.data_info[0]);
          // console.log(_this.data_info[0].longitude);
          // console.log(_this.data_info.length);
          // console.log(_this.om.longitude)
          var map = new BMap.Map("allmap");
          map.centerAndZoom(new BMap.Point(_this.om.longitude,_this.om.latitude), 15);
          map.enableScrollWheelZoom(); //启用滚轮放大缩小 

        var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              var mk = new BMap.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              // alert('您的位置：'+r.point.lng+','+r.point.lat);
              localStorage.setItem("mylng",r.point.lng);
              localStorage.setItem("mylat",r.point.lat);
            }
            else {
              alert('failed'+this.getStatus());
            }        
          },{enableHighAccuracy: true})

          var opts = {
                width : 250,     // 信息窗口宽度
                height: 80,     // 信息窗口高度
                title : "信息窗口" , // 信息窗口标题
                enableMessage:true//设置允许信息窗发送短息
              };
          for(var i=0;i<_this.data_info.length;i++){
            var marker = new BMap.Marker(new BMap.Point(_this.data_info[i].longitude,_this.data_info[i].latitude));  // 创建标注
            var content = _this.data_info[i].address;
            map.addOverlay(marker);               // 将标注添加到地图中
            addClickHandler(content,marker);
          }
          function addClickHandler(content,marker){
            marker.addEventListener("mouseover",function(e){
              openInfo(content,e)}
            );
          };
          function openInfo(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
          };
        // }).catch((err)=>{
        //   console.log(err);
        // });
      }
    }
  }
</script>
