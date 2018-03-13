<template>
  <div class="hello">
    
    <nav-bread>
        购物车
    </nav-bread> 
    <div class="page-main" id="cart-box">
        <div class="container">
            <div class="cart-goods-list">
                <div class="list-head clearfix">
                    <div class="col col-img" id="itemsnum-top">图片</div>
                    <div class="col col-name">商品名称</div>
                    <div class="col col-price">单价</div>
                    <div class="col col-num">数量</div>
                    <div class="col col-total">小计</div>
                    <div class="col col-action">操作</div>
                </div>
                <div class="list-body">

                    <div class="item-box">
                        <div class="item-table">
                            <div class="item-row clearfix">
                                <div class="col col-img">
                                    <a href="goods.php?id=27" target="_blank"> 
                                        <img alt="小米电视2 40英寸" src="/static/images/201507/27_thumb_G_1437074702008.jpg">
                                    </a>
                                </div>
                                <div class="col col-name">
                                    <h3 class="name">
                                        <a href="goods.php?id=27" target="_blank">小米电视2 40英寸 </a>
                                    </h3>
                                    <p class="desc">
                                        <span>尺寸:45 颜色:黄[100] </span>
                                    </p>
                                </div>

                                <div class="col col-price">
                                    2300.00<em>元</em> 
                                </div>
                                <div class="col col-num">
                                    <div class="change-goods-num clearfix">
                                        <a href="javascript:void(0)" class="minus" title="减少1个数量" onclick="flowClickCartNum(14,-1);">
                                            <i class="iconfont"></i>
                                        </a>
                                        <input type="text" id="goods_number_14" value="1" onchange="flowClickCartNum(14,0)">
                                        <a href="javascript:void(0)" class="add" title="增加1个数量" onclick="flowClickCartNum(14,+1);">
                                            <i class="iconfont"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col col-total">
                                    <span id="total_items_14">
                                        2300.00<em>元</em>
                                    </span>
                                </div>
                                <div class="col col-action">
                                    <a class="del" href="javascript:if (confirm('您确实要把该商品移出购物车吗？')) location.href='flow.php?step=drop_goods&amp;id=14';">
                                        <i class="iconfont"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="clear-cart"> <a id="del-all" href="flow.php?step=clear">清空购物车</a> </p>

                <div class="cart-bar clearfix">
                    <div class="section-left">
                        <a class="back-shopping btn btn-gray" href="./">继续购物</a>
                    </div>
                    <span class="total-price"><span class="total-num"></span>&nbsp;&nbsp;&nbsp;合计：<b id="totalSkuPrice">2547.00<em>元</em></b></span>
                    <a href="flow.php?step=checkout" class="btn btn-pay btn-primary">去结算</a>
                </div>
            </div>
        </div>
    </div>
    
    
  </div>
</template>

<script>
import NavBread from '@/components/NavBread'

export default {
  name: 'Cart',
  components:{
    NavBread
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     
</style>
