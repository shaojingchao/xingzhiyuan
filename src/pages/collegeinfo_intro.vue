<template>
  <div class="collegeinfo-intro">
    <section class="bg-white pb20">
      <c-section-title title="院校概况"></c-section-title>
      <table class="table ci-base-info">
        <tbody>
        <tr>
          <td><span class="text-muted">省份：</span>北京</td>
          <td><span class="text-muted">创建：</span>1952年</td>
        </tr>
        <tr>
          <td><span class="text-muted">层次：</span>本科</td>
          <td><span class="text-muted">类型：</span>大学</td>
        </tr>
        <tr>
          <td><span class="text-muted">隶属：</span>工业和信息化部</td>
          <td><span class="text-muted">学生：</span>29951人</td>
          <td></td>
        </tr>
        <tr>
          <td colspan="2"><span class="text-muted">地址：</span>北京市海定区学院路37号 </td>
        </tr>
        <tr>
          <td colspan="2"><span class="text-muted">电话：</span>010-8236548、2245566、36598726 </td>
        </tr>
        <tr>
          <td colspan="2"><span class="text-muted">网址：</span><a href="http://www.buaa.edu.cn/" class="text-primary">http://www.buaa.edu.cn/</a></td>
        </tr>
        <tr>
          <td colspan="2"><span class="text-muted">邮箱：</span>bdzsb@pku.edu.cn </td>
        </tr>
        </tbody>
      </table>
    </section>

    <section class="bg-white mt10 ov-h">
      <c-section-title title="院校介绍"></c-section-title>
      <div class="desc-content pl10 pr10" ref="descContent">
        <p></p>
        <p>　　北京大学创办于1898年，初名京师大学堂，是中国第一所国立综合性大学，也是当时中国最高教育行政机关。辛亥革命后，于1912年改为现名。</p>
        <p>
          　　作为新文化运动的中心和“五四”运动的策源地，作为中国最早传播马克思主义和民主科学思想的发祥地，作为中国共产党最早的活动基地，北京大学为民族的振兴和解放、国家的建设和发展、社会的文明和进步做出了不可替代的贡献，在中国走向现代化的进程中起到了重要的先锋作用。爱国、进步、民主、科学的传统精神和勤奋、严谨、求实、创新的学风在这里生生不息、代代相传。</p>
        <p>
          　　1917年，著名教育家蔡元培出任北京大学校长，他“循思想自由原则，取兼容并包主义”，对北京大学进行了卓有成效的改革，促进了思想解放和学术繁荣。陈独秀、李大钊、毛泽东以及鲁迅、胡适等一批杰出人才都曾在北京大学任职或任教。</p>
        <p>　　1937年卢沟桥事变后，北京大学与清华大学、南开大学南迁长沙，共同组成长沙临时大学。不久，临时大学又迁到昆明，改称国立西南联合大学。抗日战争胜利后，北京大学于1946年10月在北平复学。</p>
        <p>
          　　中华人民共和国成立后，全国高校于1952年进行院系调整，北京大学成为一所以文理基础教学和研究为主的综合性大学，为国家培养了大批人才。据不完全统计，北京大学的校友和教师有400多位两院院士，中国人文社科界有影响的人士相当多也出自北京大学。</p>
        <p>　　改革开放以来，北京大学进入了一个前所未有的大发展、大建设的新时期，并成为国家“211工程”重点建设的两所大学之一。</p>
        <p>
          　　1998年5月4日，北京大学百年校庆之际，国家主席江泽民在庆祝北京大学建校一百周年大会上发表讲话，发出了“为了实现现代化，我国要有若干所具有世界先进水平的一流大学”的号召。在国家的支持下，北京大学适时启动“创建世界一流大学计划”，从此，北京大学的历史翻开了新的一页。</p>
        <p>
          　　2000年4月3日，北京大学与原北京医科大学合并，组建了新的北京大学。原北京医科大学的前身是国立北京医学专门学校，创建于1912年10月26日。20世纪三、四十年代，学校一度名为北平大学医学院，并于1946年7月并入北京大学。1952年在全国高校院系调整中，北京大学医学院脱离北京大学，独立为北京医学院。1985年更名为北京医科大学，1996年成为国家首批“211工程”重点支持的医科大学。两校合并进一步拓宽了北京大学的学科结构，为促进医学与人文社会科学及理科的结合，改革医学教育奠定了基础。</p>
        <p>
          　　近年来，在“211工程”和“985工程”的支持下，北京大学进入了一个新的历史发展阶段，在学科建设、人才培养、师资队伍建设、教学科研等各方面都取得了显著成绩，为将北大建设成为世界一流大学奠定了坚实的基础。今天的北京大学已经成为国家培养高素质、创造性人才的摇篮、科学研究的前沿和知识创新的重要基地和国际交流的重要桥梁和窗口。</p>
        <p>　　现任校党委书记朱善璐教授、校长林建华教授。</p>
        <p><br></p>
        <p></p>
      </div>
      <div class="toggle-btn on-active bti" @click.capture="toggleDesc"><span class="mintui mintui-back down"></span></div>
    </section>

    <section class="bg-white mt10">
      <c-section-title title="校园照片"></c-section-title>
      <div class="photo-content bti">
        <gallery :images="photoListComp" :options="{urlProperty: 'href',continuous: false,hidePageScrollbars:false,closeOnSlideClick: true}" :index="photoIndex" @close="index = null"></gallery>
        <div class="img-item-wrap"
             v-for="(item, imageIndex) in photoListComp.slice(0,4)"
             :key="imageIndex"
             @click="photoIndex = imageIndex">
          <div class="img-item">
            <img v-lazy="item.href" :alt="item.title">
            <p class="elli">{{item.title}}</p>
          </div>
        </div>
      </div>
      <c-more class="bti" :to="{name:'collegephoto',params: {id:1}}"></c-more>
    </section>
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
  },
  methods: {
    toggleDesc (e) {
      $(this.$refs.descContent).toggleClass('show')
      $(e.currentTarget).find('span').toggleClass('up')
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';
  .page_collegeinfo{
    /*介绍*/
    .ci-base-info{
      td{
        padding:0.5em 13px;
      }
    }
    .desc-content{
      line-height:1.8;
      max-height:8 * 1.8em;
      overflow: hidden;
      &.show{
        max-height:none;
        height:auto;
      }
    }
    .toggle-btn{
      overflow: visible;
      position: relative;
      z-index:100;
      /*background-color: #fff;*/
      box-shadow: 0 -10px 20px 0px rgba(255,255,255,1);
      text-align: center;
      padding:15px 0 15px;
      /*margin:-10px 0 0;*/
      .mintui{
        display: inline-block;
        transition: transform 0.3s;
        transform: rotate(-90deg);
      }
      .up{
        transform: rotate(90deg);
      }
    }

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
