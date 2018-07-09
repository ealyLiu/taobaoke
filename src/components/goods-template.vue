<template>

<div class="content">
<ul class="clearfix"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10" v-if="goodsFirst.length">
  <li class="fl" v-for="item in goodsFirst">
    <router-link :to="{
      name:'goods-detail',
      params:{
        taoLink:item.taoLink,
        imgSrc:item.goodsImg,
        goodsName:item.goodsName,
        goodsPrice:item.goodsPrice
      }
    }">
      <div>
        <img :src="item.goodsImg" :alt="item.goodsName">
        <h3>{{item.goodsName}}</h3>
        <p>¥ {{item.goodsPrice}}</p>
      </div>
    </router-link>
  </li>
</ul>
<div v-else>
<p class="search-result">未找到结果</p>
</div>
</div>

</template>

<script>
export default {
  props:{
    pageType:{
      type:Number,
      default:1
    },
    type:{
      type:Number,
      default:1
    }
  },
  name: 'goods-template',
  data () {
    return {
      goods:[],
      goodsFirst:[],
      loading:false,
      count:0
    }
  },
  methods:{
    getData(type){
      let women_dress = "/taobaoke/static/goods.json",
          mother_baby = "/taobaoke/static/mother-baby.json",
          electric = "/taobaoke/static/electric.json",
          food = "/taobaoke/static/foods.json",
          _type = women_dress,
          oType = type || "",
          _this = this;

      this.goodsFirst = [];
      if(this.pageType == "1"){
        if(type && type == "1"){
          _type = women_dress;
        }else if(type && type == "2"){
          _type = mother_baby;
        }else if(type && type == "3"){
          _type = electric;
        }else if(type && type == "4"){
          _type = food;
        }
        this.$http({
          url:_type,
          method:"get"
        }).then(response=>{
          this.goods = response.data;
          this.goodsFirst = response.data.slice(0,10);
        });
      }else if(this.pageType == "2"){
        function getWomenType() {
          return _this.$http.get(women_dress);
        }

        function getMotherType() {
          return _this.$http.get(mother_baby);
        }

        function getElectricrType() {
          return _this.$http.get(electric);
        }

        function getFoodType() {
          return _this.$http.get(food);
        }

        _this.$http.all([getWomenType(), getMotherType(),getElectricrType(),getFoodType()]).then(_this.$http.spread(function (first, second, third, fourth) {
          var oResData = [...first.data,...second.data,...third.data,...fourth.data].filter(function(result){
            if(result.goodsName.indexOf(_this.$route.params.searchKeyword) != -1){
              return result;
            }
          });
          _this.goods = oResData;
          _this.goodsFirst = oResData.slice(0,10);
        }));
      }
    },
    loadMore() {
      this.count++;
      this.goodsFirst = [...this.goodsFirst,...this.goods.slice(this.count*10,this.count*10+10)];
    }
  },
  watch:{
    type:function(){
      this.getData(this.type);
    }
  },
  beforeMount(){
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  width:100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align:left;
  font-size:0.625rem;
  margin:0.3125rem 0;
  padding:0 0.15625rem;
}
.content{
  padding:0 0.09375rem 0 0.09375rem;
}
.content ul li{
  background: #fff;
  width:50%;
  padding:0 0.09375rem 0.1875rem 0.09375rem;
}
.content ul li div{
  border:#e5e5e5 solid 1px;
}
.content ul li img{
  display: block;
  width:9.65625rem;
  height:9.65625rem;
}
.content ul li p{
  color:red;
  text-align:left;
  font-size:0.625rem;
  padding:0 0.15625rem 0.15625rem 0.15625rem;
}

.search-result{
  font-size:0.625rem;
  text-align: center;
}
</style>
