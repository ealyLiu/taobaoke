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
      path: '/taobaoke',
      name: 'root',
      component: goodsList
    },
    {
    	path:'/taobaoke/goods-detail/:taoLink&imgSrc=:imgSrc&goodsName=:goodsName&goodsPrice=:goodsPrice',
    	name:'goods-detail',
    	component:goodsDetail
    },
    {
      path:'/taobaoke/search-goods/:searchKeyword',
      name:'search-goods',
      component:searchGoods
    }
  ]
})
