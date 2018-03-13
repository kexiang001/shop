<template>
  <div class="hello">
    <div class="site-header" style="clear:both;">
        <div class="container">
            <div class="header-logo">
                <a href="index.php" title="小米官网"><img src="/static/img/logo.png" /></a>
            </div>
            <div class="header-nav">
                <ul class="nav-list">
                    <li class="nav-category">
                        <a class="btn-category-list" href="catalog.php" style="display:none;">全部商品分类</a>
                    </li>
                    <li class="nav-item">
                        <a class="link" href="category.php?id=76"></a>
                        <div class='item-children'>
                            <div class="container">
                                <ul class="children-list clearfix">
                                    <li class="first">
                                        <div class="figure figure-thumb">
                                            <a href="goods.php?id=27"><img src="" alt="小米电视2 40英寸"></a>
                                        </div>
                                        <div class="title"><a href="goods.php?id=27">小米电视2 40英寸</a></div>
                                        <p class="price">2200<em>元</em>元</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <div class="container-user"> -->
            <div class="topbar-cart" id="ECS_CARTINFO">
                <a class="cart-mini " href="#/cart">
                    <i class="iconfont">&#xe60c;</i> 购物车
                    <span class="mini-cart-num J_cartNum" id="hd_cartnum">(0)</span>
                </a>
            </div>
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName==''" >
                <a class="link" href="#" rel="nofollow" v-on:click="showModal">登录</a>
                <span class="sep">|</span>
                <a class="link" href="#/register" rel="nofollow">注册</a>
            </div>
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE"v-show="userName!=''">
               {{userName}}
            </div>
            <!-- </div> -->
        </div>
        <div id="J_navMenu" class="header-nav-menu" style="display: none;">
            <div class="container"></div>
        </div>
    </div>
    <login-modal 
        v-bind:md-show="showLogin"
        v-on:closed="closeModal"
        v-on:success="loginOK"

    >
    </login-modal>
  </div>
  
</template>

<script>
import LoginModal from '@/components/LoginModal'
export default {
  name: 'NavHeader',
  data(){
      return {
          userName:"",
          showLogin:false
      }
  },
  components:{
      LoginModal
  },
  methods:{
      showModal(){
          this.showLogin = true
      },
      closeModal(){
          this.showLogin = false
      },
      loginOK(userName){
          console.log(userName)
          this.userName = userName
          this.closeModal()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
