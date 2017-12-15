<template>
  <div class="comp_vip">
    <p>开通星志愿VIP</p>
    <p>{{text}}</p>
    <div>
      <mt-button @click.native="goVipPage" class="btn btn-xl">
      <span slot="">立即开通</span>
      </mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-vip',
    props: {
      text: {
        type: String,
        required: false,
        default: '即可查看全部信息'
      }
    },
    methods: {
      goVipPage () {
        this.$router.push({name: 'vip'})
      }
    }
  }
</script>

<style lang="less">
  @import '../../assets/less/_mixins-wln/_wln-variables.less';
  .comp_vip {
    padding:20px 0;
    text-align: center;
    p {
      text-align: center;
      color: #aaa;
      margin:5px 0;
    }
    .btn{
      margin-top:10px;
      border-radius:40px;
      color:#fff;
      padding:0 3.6em;
      border-color:@second;
      height:2.6em;
      line-height:2.6em;
      background-color: @second;
      box-shadow: 0 1px 5px rgba(244,190,8,.3);
    }
  }

</style>
