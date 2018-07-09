<template>
<goods-template :pageType="2"></goods-template>
</template>

<script>
import goodsTemplate from "./goods-template"
export default {
  name: 'search-goods',
  components:{
    goodsTemplate
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
  padding-top:0.3125rem;
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
