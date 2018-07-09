<template>
<div class="content">
<a :href="this.$route.params.taoLink">
<img :src="this.$route.params.imgSrc" :alt="this.$route.params.goodsName">
<p>{{this.$route.params.goodsName}}</p>
<span>¥ {{this.$route.params.goodsPrice}}</span>
</a>
</div>
</template>

<script>
export default {
  name: 'goods-detail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  padding:0 3%;
}
.content img{
  width:100%;
}
.content p,.content span{
  text-align:left;
  
}
.content span{
  display: block;
  color:red;
  padding:1rem 0;
}
</style>
