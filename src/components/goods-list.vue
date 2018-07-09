<template>
<div>

<div class="search-wrapper" v-show="showSearch">
  <div class="top-search clearfix">
    <input id="search" class="search-input fl" type="text" @keyup.13="toSearch($event)" placeholder="请输入">
    <a href="javascript:;" @touchend.stop="showSearchHandle" class="search-cancel fr">取消</a>
  </div>
</div>

<div class="search">
  <div class="search-button clearfix" @touchend.stop="showSearchHandle">
    <img class="fl" src="../assets/images/search-icon.png">
    <div class="search-text fl">搜索</div>
  </div>
</div>

<div class="nav">
  <ul class="clearfix">
    <li class="female-dress fl" :class="{active:type==1}" @touchend="changeType(1)">女装</li>
    <li class="mother-baby fl" :class="{active:type==2}" @touchend="changeType(2)">母婴</li>
    <li class="electric fl" :class="{active:type==3}" @touchend="changeType(3)">电子产品</li>
    <li class="food fl" :class="{active:type==4}" @touchend="changeType(4)">美食</li>
  </ul>
</div>

<goods-template :type="type" :pageType="1"></goods-template>

</div>
</template>

<script>
import goodsTemplate from "./goods-template"

export default {
  name: 'goods-list',
  data () {
    return {
      goods:[],
      type:1,
      showSearch:false
    }
  },
  components:{
    goodsTemplate
  },
  methods:{
    changeType(type){
      this.type = type;
    },
    showSearchHandle(){
      this.showSearch = !this.showSearch;
      if(this.showSearch){
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        setTimeout(function(){
          document.getElementById("search").focus();
        },0);
      }else{
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        document.getElementById("search").value = "";
      }
    },
    toSearch(ev){
      var txtVal = ev.target.value || "";

      if (txtVal && txtVal.trim()) {
          this.$router.push({
              name: 'search-goods',
              params: {
                  searchKeyword: txtVal
              }
          });
          document.getElementsByTagName("html")[0].style.overflow = "auto";
          document.getElementById("search").value = "";
      }
    }
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

.nav{
  margin-bottom:0.625rem;
}

.nav ul li{
  background: #fff;
  width:25%;
  height:2rem;
  line-height: 2rem;
  font-size: 0.6875rem;
  text-align:center;
}

.nav ul .active{
  color:#26a2ff;
  border-bottom:2px solid #26a2ff;
}

.search{
  background: #efefef;
  height:2.5rem;
  width:100%;
  text-align: center;
}

.search .search-button{
  display: inline-block;
  width:18.75rem;
  height:1.5625rem;
  line-height:1.5625rem;
  margin:0.46875rem auto;
  background:#fff;
  border-radius:0.15625rem;
}

.search-button img{
  margin-left:0.3125rem;
  width:0.9375rem;
  margin-top:0.28125rem;
  height:auto;
}

.search-wrapper{
  width:100%;
  height:100%;
  position:fixed;
  z-index:99;
  background:#fff;
  left:0;
  top:0;
}

.search-text{
  margin-left:0.625rem;
  font-size:0.8125rem;
  color:#b5b5b5;
}

.top-search{
  padding:0.3125rem;
  background:#efefef;
  height:1.875rem;
}

.search-input{
  padding-left: 1.25rem;
  background: url("../assets/images/search-icon.png") 0.1875rem center no-repeat #fff;
  background-size:0.8125rem;
  border:1px solid #ccc;
  font-size:0.625rem;
  height:1.25rem;
  line-height: 1.25rem;
  border-radius: 5px;
  width:17.96875rem;
}

.search-cancel{
  font-size:0.625rem;
  line-height: 1.25rem;
}
</style>
