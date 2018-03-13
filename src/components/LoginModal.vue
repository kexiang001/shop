<template>
  <div class="hello">
     <div class="md-modal modal-msg md-modal-transition" v-bind:class="mdShow?'md-show':''" >
        <div class="md-modal-inner">
          <div class="md-top">
            <div class="md-title">登录</div>
            <button class="md-close" v-on:click="close">Close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <div class="error-wrap" v-show="hasError">
                <span class="error error-show" >用户名或密码错误</span>
              </div>
              <ul>
                <li class="regi_form_input">
                  <input type="text" tabindex="1" name="loginname" v-model="userName" placeholder="用户名" data-type="loginname" class="regi_login_input regi_login_input_left">
                </li>
                <li class="regi_form_input noMargin">
                  <i class="icon IconPwd"></i>
                  <input type="password" tabindex="2" name="password" v-model="userPwd" placeholder="密码" class="regi_login_input regi_login_input_left login-input-no input_text" @keyup.enter="login">
                </li>
              </ul>

            </div>
            <div class="login-wrap">
              <a href="javascript:;" class="btn-login" v-on:click="login" >登录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="mdShow" >
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  props:["mdShow"],
  data(){
      return {
          hasError:false,
          userName:"",
          userPwd:""
      }
  },
  methods:{
    login(){
      this.axios.get("/static/mock/mock-user.json",{
        params:{
          userName: this.userName,
          userPwd: this.userPwd
        }
      })
      .then((res) => {
        var data = res.data
        // alert(data.result.userName)
        if(data.code == 0){
          
          this.$emit("success",data.result.userName)
        }else{
          this.hasError = true;
        }
      })
    },
    close:function(){
        this.$emit("closed")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
