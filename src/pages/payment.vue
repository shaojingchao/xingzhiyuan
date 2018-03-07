<template>
  <div class="page_payment">
    <mt-header title="确认订单">
      <c-router-back slot="left"></c-router-back>
    </mt-header>
    <mt-cell class="no-bd" title="星志愿VIP"><span class="f14">¥ 198.0</span></mt-cell>
    <mt-cell title="支付金额："><b class="text-second f16">¥ 198.0</b></mt-cell>

    <mt-cell tag="div" class="mt10 pay-mode no-bd on-active" title="微信支付" @click.native="selectPayMode('wxpay')">
      <span slot="icon" class="icon">
        <img src="../assets/imgs/icon/icon-wechat.png">
      </span>
      <span class="check-icon" :class="{checked:(payMode === 'wxpay')}"></span>
    </mt-cell>
    <mt-cell tag="div" class="pay-mode on-active" title="支付宝支付" @click.native="selectPayMode('alipay')">
      <span slot="icon" class="icon">
        <img src="../assets/imgs/icon/icon-alipay.png">
      </span>
      <span class="check-icon" :class="{checked:(payMode === 'alipay')}"></span>
    </mt-cell>


    <mt-cell class="mt10 no-bd" title="VIP账号：">13837919367</mt-cell>

    <div class="p15 mt5">
      <a class="btn btn-yellow btn-block round btn-xl" @click="payBtnEvent">立即支付</a>
    </div>
    <div class="p10">
      <p class="text-muted mt5">注意事项：</p>
      <div class="tip-list f12">
        <p class="text-muted"><span class="gray3">适合考生：</span>普通类文理科考生</p>
        <p class="text-muted"><span class="gray3">适合考生：</span>适合批次：普通类非提前批</p>
        <p class="text-muted"><span class="gray3">适合考生：</span>使用日期：截止日期2018年9月1日</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'payment',
    data () {
      return {
        payMode: 'wxpay'
      }
    },
    computed: {
      payModeCls () {
        return this.payMode === 'wxpay' ? 'checked' : 'unchecked'
      }
    },
    methods: {
      selectPayMode (mode) {
        console.log(mode)
        this.payMode = mode
      },
      payBtnEvent () {
        let _self = this
        _self.$toast({
          message: '支付成功',
          position: 'bottom',
          duration: 1500
        })
        setTimeout(() => {
          _self.$store.commit('buyVip', true)
          _self.$router.go(-2)
        }, 2000)
      }
    }
  }
</script>

<style lang='less'>
  @import '../assets/less/_mixins-wln/_wln-variables.less';
  .page_payment{
    padding-bottom: 50px;

    /* 支付方式 */
    .pay-mode{
      .icon{
        display: inline-block;
        width:24px;
        height:24px;
        margin:0 5px 0 0;
        text-align: center;
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
      .check-icon{
        width:20px;
        height:20px;
        background: url(../assets/imgs/icon/vip-unchecked.png) 50% 50% no-repeat;
        background-size: 20px 20px !important;
        &.checked{
          background: url(../assets/imgs/icon/vip-checked.png) 50% 50% no-repeat;
        }
      }
    }

    /* 注意事项 */
    .tip-list{
      p{
        &:after{
          content:'';
          display: block;
          float: left;
          width:7px;
          height:7px;
          border-radius:100%;
          background-color: @primary;
          box-shadow: 0 0 1px rgba(0,0,0,.2);
          margin-right:10px;
          margin-top:3px;
        }
      }
    }
  }

</style>
