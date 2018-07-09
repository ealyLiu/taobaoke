import Vue from 'vue'
import Router from 'vue-router'
import goodsList from '@/components/goods-list'
import goodsDetail from '@/components/goods-detail'
import searchGoods from '@/components/search-goods'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/',
      name: 'root',
      component: goodsList
    },
    {
    	path:'/goods-detail/:taoLink&imgSrc=:imgSrc&goodsName=:goodsName&goodsPrice=:goodsPrice',
    	name:'goods-detail',
    	component:goodsDetail
    },
    {
      path:'/search-goods/:searchKeyword',
      name:'search-goods',
      component:searchGoods
    }
  ]
})
