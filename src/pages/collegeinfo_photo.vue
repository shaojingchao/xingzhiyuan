<template>
  <div class="page_collegephoto">
    <mt-header title="校园照片">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <section class="bg-white">
      <div class="photo-content">
        <gallery :images="photoListComp" :options="{urlProperty: 'href',continuous: false,hidePageScrollbars:false,closeOnSlideClick: true}" :index="photoIndex" @close="index = null"></gallery>
        <div class="img-item-wrap"
             v-for="(item, imageIndex) in photoListComp"
             :key="imageIndex"
             @click="photoIndex = imageIndex">
          <div class="img-item">
            <img v-lazy="item.href" :alt="item.title">
            <p class="elli">{{item.title}}</p>
          </div>
        </div>
      </div>
    </section>
    <c-endline></c-endline>
  </div>
</template>

<script>
import Photo from '@/store/photo'
import VueGallery from 'vue-gallery'

export default {
  name: 'college',
  components: {
    'gallery': VueGallery
  },
  data () {
    return {
      baseUrl: 'http://192.168.4.33:8081/zytb/',
      photoList: Photo,
      photoIndex: null
    }
  },
  computed: {
    photoListComp () {
      return this.photoList.map((item) => {
        return {
          href: this.baseUrl + item.href,
          title: item.title
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_collegephoto{

    /*校园照片*/
    .photo-content{
      display: flex;
      flex-wrap: wrap;
      padding:8px;
      .img-item-wrap{
        box-sizing: border-box;
        padding:4px;
        width:50%;
      }
      .img-item{
        background-color: @bg-body;
        height:100px;
        position: relative;
        border-radius: 3px;
        overflow:hidden;
        p{
          position: absolute;
          bottom:0;
          right:0;
          left:0;
          margin:0;
          padding:5px;
          background-color: rgba(0,0,0,0.3);
          color:#fff;
          text-align: center;
        }
        img{
          position: absolute;
          top:50%;
          transform: translateY(-50%);
          display: block;
          max-width:100%;
          &[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
          }
        }
      }
    }
  }

</style>
