<template>
  <div class="page_report_desc">
    <!--性格描述-->
    <section class="mb10 bg-white">
      <!--<h3 class="bd-title">职业性格测试结果</h3>-->
      <div class="p10">
        <div class="head-desc bg-body">
          <div class="title tc">职业性格测试结果</div>
          <div class="desc gray9">
            <p>我性格测试的结果为<strong class="text-primary">INTJ</strong>（内向+直觉+思考+判断）</p>
            <p>MBTI共四个维度，每个维度有两个方向，共计16种
              类型。 <br>
              外倾（E）、内倾（I）、感觉（S）、直觉（N）、思
              维（T）、情感（F）、判断（J）、理解（P）</p>
          </div>
        </div>

        <p class="text-muted mt20">性格倾向用条形图显示如下，条越长，倾向越明显。</p>
        <div class="tc pt5">MBTI性格倾向明显程度示意图</div>
        <table class="cs-chart mt10 mb10">
          <tr>
            <td width="80" align="right">外倾（E）</td>
            <td align="right">
              <div class="small-bar-wrap">
                <span class="small-bar bgc-1" style="width:0"></span>
              </div>
            </td>
            <td>
              <div class="small-bar-wrap">
                <span class="small-bar bgc-1" style="width:20%"></span>
              </div>
            </td>
            <td width="80">内倾（I）</td>
          </tr>
          <tr>
            <td width="80" align="right">感觉（S）</td>
            <td align="right">
              <div class="small-bar-wrap">
                <span class="small-bar bgc-2" style="width:50%"></span>
              </div>
            </td>
            <td>
              <div class="small-bar-wrap">
                <span class="small-bar bgc-2" style="width:0"></span>
              </div>
            </td>
            <td width="80">直觉（N）</td>
          </tr>
          <tr>
            <td width="80" align="right">思维（T）</td>
            <td align="right">
              <div class="small-bar-wrap">
                <span class="small-bar bgc-3" style="width:30%"></span>
              </div>
            </td>
            <td>
              <div class="small-bar-wrap">
                <span class="small-bar bgc-3" style="width:0"></span>
              </div>
            </td>
            <td width="80">情感（F）</td>
          </tr>
          <tr>
            <td width="80" align="right">判断（J）</td>
            <td align="right">
              <div class="small-bar-wrap">
                <span class="small-bar bgc-4" style="width:70%"></span>
              </div>
            </td>
            <td>
              <div class="small-bar-wrap">
                <span class="small-bar bgc-4" style="width:0"></span>
              </div>
            </td>
            <td width="80">理解（P）</td>
          </tr>
          <tr>
            <td colspan="4" align="center" class="text-gray" style="padding:0;">强 明显 中等 轻微 中等 明显 强</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="bg-white mb10">
      <c-section-title title="性格描述"></c-section-title>

      <div class="cs-more-intro pl10 pr10 pb5">
        <table class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th>ISTJ</th>
            <th>内倾+感觉+思维+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-h col-xs-2">描述</td>
            <td class="text-l">
              安静、严肃，通过全面性和可靠性获得成功。
              <br>
              实际，有责任感。决定有逻辑性，并一步步地朝着目标前进，不易分心。
              <br>
              喜欢将工作、家庭和生活都安排得井井有条。
              <br>
              重视传统和忠诚。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-lv col-xs-2">ISFJ</th>
            <th class="text-l">内倾+感觉+情感+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-lv col-xs-2">描述</td>
            <td class="text-l">
              安静、友好、有责任感和良知。
              <br>
              坚定地致力于完成他们的义务。
              <br>
              全面、勤勉、精确，忠诚、体贴，留心和记得他们重视的人的小细节，关心他人的感受。
              <br>
              努力把工作和家庭环境营造得有序而温馨。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-lan col-xs-2">INFJ</th>
            <th class="text-l">内倾+直觉+情感+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-lan col-xs-2">描述</td>
            <td class="text-l">
              寻求思想、关系、物质等之间的意义和联系。
              <br>
              希望了解什么能够激励人，对人有很强的洞察力。
              <br>
              有责任心，坚持自己的价值观，对于怎样更好的服务大众有清晰的远景。
              <br>
              在对于目标的实现过程中有计划而且果断坚定。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-zi col-xs-2">ISTJ</th>
            <th class="text-l">内倾+感觉+思维+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-zi col-xs-2">描述</td>
            <td class="text-l">
              安静、严肃，通过全面性和可靠性获得成功。
              <br>
              实际，有责任感。决定有逻辑性，并一步步地朝着目标前进，不易分心。
              <br>
              喜欢将工作、家庭和生活都安排得井井有条。
              <br>
              重视传统和忠诚。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-fen col-xs-2">INTJ</th>
            <th class="text-l">内倾+直觉+思维+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-fen col-xs-2">描述</td>
            <td class="text-l">
              在实现自己的想法和达成自己的目标时有创新的想法和非凡的动力。
              <br>
              能很快洞察到外界事物间的规律并形成长期的远景计划。
              <br>
              一旦决定做一件事就会开始规划并直到完成为止。
              <br>
              多疑、独立，对于自己和他人能力和表现的要求都非常高。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-qing col-xs-2">ISTP</th>
            <th class="text-l">内倾+感觉+思维+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-qing col-xs-2">描述</td>
            <td class="text-l">
              灵活、忍耐力强，是个安静的观察者直到有问题发生，就会马上行动，找到实用的解决方法。
              <br>
              分析事物运作的原理，能从大量的信息中很快的找到关键的症结所在。
              <br>
              对于原因和结果感兴趣，用逻辑的方式处理问题，重视效率。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-h col-xs-2">ISFP</th>
            <th class="text-l">内倾+感觉+情感+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-h col-xs-2">描述</td>
            <td class="text-l">
              安静、友好、敏感、和善。享受当前。
              <br>
              喜欢有自己的空间，喜欢能按照自己的时间表工作。
              <br>
              对于自己的价值观和自己觉得重要的人非常忠诚，有责任心。
              <br>
              不喜欢争论和冲突。不会将自己的观念和价值观强加到别人身上。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-lv col-xs-2">INFP</th>
            <th class="text-l">内倾+直觉+情感+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-lv col-xs-2">描述</td>
            <td class="text-l">
              理想主义，对于自己的价值观和自己觉得重要的人非常忠诚。
              <br>
              希望外部的生活和自己内心的价值观是统一的。
              <br>
              好奇心重，很快能看到事情的可能性，能成为实现想法的催化剂。
              <br>
              寻求理解别人和帮助他们实现潜能。
              <br>
              适应力强，灵活，善于接受，除非是有悖于自己的价值观的。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-lan col-xs-2">INTP</th>
            <th class="text-l">内倾+直觉+思维+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-lan col-xs-2">描述</td>
            <td class="text-l">
              对于自己感兴趣的任何事物都寻求找到合理的解释。
              <br>
              喜欢理论性的和抽象的事物，热衷于思考而非社交活动。
              <br>
              安静、内向、灵活、适应力强。
              <br>
              对于自己感兴趣的领域有超凡的集中精力深度解决问题的能力。
              <br>
              多疑，有时会有点挑剔，喜欢分析。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-zi col-xs-2">ESTP</th>
            <th class="text-l">外倾+感觉+思维+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-zi col-xs-2">描述</td>
            <td class="text-l">
              灵活、忍耐力强，实际，注重结果。
              <br>
              觉得理论和抽象的解释非常无趣。
              <br>
              喜欢积极地采取行动解决问题。
              <br>
              注重当前，自然不做作，享受和他人在一起的时刻。
              <br>
              喜欢物质享受和时尚。
              <br>
              学习新事物最有效的方式是通过亲身感受和练习。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-qing col-xs-2">ESFP</th>
            <th class="text-l">外倾+感觉+情感+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-qing col-xs-2">描述</td>
            <td class="text-l">
              外向、友好、接受力强。
              <br>
              热爱生活、人类和物质上的享受。
              <br>
              喜欢和别人一起将事情做成功。
              <br>
              在工作中讲究常识和实用性，并使工作显得有趣。
              <br>
              灵活、自然不做作，对于新的任何事物都能很快地适应。
              <br>
              学习新事物最有效的方式是和他人一起尝试。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-fen col-xs-2">ENFP</th>
            <th class="text-l">外倾+直觉+情感+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-fen col-xs-2">描述</td>
            <td class="text-l">
              热情洋溢、富有想象力。
              <br>
              认为人生有很多的可能性。
              <br>
              能很快地将事情和信息联系起来，然后很自信地根据自己的判断解决问题。
              <br>
              总是需要得到别人的认可，也总是准备着给与他人赏识和帮助。
              <br>
              灵活、自然不做作，有很强的即兴发挥的能力，言语流畅。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-zi col-xs-2">ENTP</th>
            <th class="text-l">外倾+直觉+思维+理解</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-zi col-xs-2">描述</td>
            <td class="text-l">
              性格描述：反应快、睿智，有激励别人的能力，警觉性强、直言不讳。
              <br>
              在解决新的、具有挑战性的问题时机智而有策略。
              <br>
              善于找出理论上的可能性，然后再用战略的眼光分析。
              <br>
              善于理解别人。
              <br>
              不喜欢例行公事，很少会用相同的方法做相同的事情，倾向于一个接一个的发展新的爱好。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-lv col-xs-2">ESTJ</th>
            <th class="text-l">外倾+感觉+思维+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-lv col-xs-2">描述</td>
            <td class="text-l">
              实际、现实主义。
              <br>
              果断，一旦下决心就会马上行动。
              <br>
              善于将项目和人组织起来将事情完成，并尽可能用最有效率的方法得到结果。
              <br>
              注重日常的细节。
              <br>
              有一套非常清晰的逻辑标准，有系统性地遵循，并希望他人也同样遵循。
              <br>
              在实施计划时强而有力。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-h col-xs-2">ESFJ</th>
            <th class="text-l">外倾+感觉+情感+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-h col-xs-2">描述</td>
            <td class="text-l">
              热心肠、有责任心、合作。
              <br>
              希望周边的环境温馨而和谐，并为此果断地执行。
              <br>
              喜欢和他人一起精确并及时地完成任务。
              <br>
              事无巨细都会保持忠诚。
              <br>
              能体察到他人在日常生活中的所需并竭尽全力帮助。
              <br>
              希望自己和自己的所为能受到他人的认可和赏识。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-fen col-xs-2">ENFJ</th>
            <th class="text-l">外倾+直觉+情感+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-fen col-xs-2">描述</td>
            <td class="text-l">
              热情、为他人着想、易感应、有责任心。
              <br>
              非常注重他人的感情、需求和动机。
              <br>
              善于发现他人的潜能，并希望能帮助他们实现。
              <br>
              能成为个人或群体成长和进步的催化剂。
              <br>
              忠诚，对于赞扬和批评都会积极地回应。
              <br>
              友善、好社交。在团体中能很好地帮助他人，并有鼓舞他人的领导能力。
            </td>
          </tr>
          </tbody>
        </table>

        <table style="display:none" class="table bdb mb10 MBTI-table table-bordered">
          <thead>
          <tr>
            <th class="color-lan col-xs-2">ENTJ</th>
            <th class="text-l">外倾+直觉+思维+判断</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="color-lan col-xs-2">描述</td>
            <td class="text-l">
              坦诚、果断，有天生的领导能力。
              <br>
              能很快看到公司/组织程序和政策中的不合理性和低效能性，发展并实施有效和全面的系统来解决问题。
              <br>
              善于做长期的计划和目标的设定。
              <br>
              通常见多识广，博览群书，喜欢拓广自己的知识面并将此分享给他人。
              <br>
              在陈述自己的想法时非常强而有力。
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="bg-white mb10">
      <c-section-title title="主要特征"></c-section-title>
      <div class="bd-item-content">
        <span class="num-icon">1</span><span>热情而有创造性。</span>你的世界充满可能性，有趣的
        观念和激动人心的挑战。困难对于你是一种激励，能
        快速对困难做出创造性的反应，并投身于行动中。主
        要倾向于对外在事物做抽象的概括，喜欢在生活中运
        用技巧。 通常：
        <br>* 有创造性，有想象力，聪明 * 理论性，概念性，好
        奇
        <span class="num-icon">2</span><span>能内在地运用自己的思考去分析形势和形成自己
                    的观点，不会感情用事。</span>崇尚能力、智慧、准确和效
        率。 往往：<br>
        * 善分析、有逻辑性、理智、客观 * 决断又好问
      </div>
    </section>

    <section class="bg-white mb10">
      <c-section-title title="给他人的印象"></c-section-title>
      <div class="bd-item-content">
        <span class="num-icon">1</span><span>热情而有创造性。</span>你的世界充满可能性，有趣的
        观念和激动人心的挑战。困难对于你是一种激励，能
        快速对困难做出创造性的反应，并投身于行动中。主
        要倾向于对外在事物做抽象的概括，喜欢在生活中运
        用技巧。 通常：
        <br>* 有创造性，有想象力，聪明 * 理论性，概念性，好
        奇
        <span class="num-icon">2</span><span>能内在地运用自己的思考去分析形势和形成自己
                    的观点，不会感情用事。</span>崇尚能力、智慧、准确和效
        率。 往往：<br>
        * 善分析、有逻辑性、理智、客观 * 决断又好问
      </div>
    </section>

    <section class="bg-white mb10">
      <c-section-title title="别人往往这样看你"></c-section-title>
      <div class="bd-item-content">
        <span class="num-icon">1</span><span>热情而有创造性。</span>你的世界充满可能性，有趣的
        观念和激动人心的挑战。困难对于你是一种激励，能
        快速对困难做出创造性的反应，并投身于行动中。主
        要倾向于对外在事物做抽象的概括，喜欢在生活中运
        用技巧。 通常：
        <br>* 有创造性，有想象力，聪明 * 理论性，概念性，好
        奇
        <span class="num-icon">2</span><span>能内在地运用自己的思考去分析形势和形成自己
                    的观点，不会感情用事。</span>崇尚能力、智慧、准确和效
        率。 往往：<br>
        * 善分析、有逻辑性、理智、客观 * 决断又好问
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'mbti-report-desc',
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="less">
  @import '../assets/less/_mixins-wln.less';

  .page_report_desc {
    .head-desc {
      border-radius: 7px;
      margin-top: 5px;
      border: 1px dashed #ddd;
      padding: 0 10px 10px;
      background-color: @bg-body;
      .title {
        border-bottom: 1px dashed #ddd;
        padding: 13px 0;
      }
    }
  }

</style>

