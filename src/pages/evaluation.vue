<template>
  <div class="page_evaluation">
    <mt-header title="综合测评">
      <c-router-back slot="left"></c-router-back>
    </mt-header>

    <div class="eva-content">
      <div id="J_quesStart" style="display:none" v-if="!isDone">
        <div class="ques-part-title">
          <h3 class="ft18"><b>{{partTitle}}</b></h3>
          <p class="ft14 mt10">{{partDesc}}</p>
        </div>
        <a href="javascript:" class="ques-btn ques-btn-primary" id="J_quesPartTips">知道了</a>
      </div>

      <!--做题-->
      <div id="J_quesList" style="display:none" v-if="!isDone">
        <div class="ques-item-title">
          <p class="ft14" style="min-height:3em;">{{partDesc}}</p>
          <br>
          <p>{{quesItem['qid']}}. {{quesItem['questiontitle']}}</p>
        </div>
        <div class="ques-item-body">
          <div class="ques-item-answer" data-id="1">A. {{quesItem['optiona']}}</div>
          <div class="ques-item-answer" data-id="2">B. {{quesItem['optionb']}}</div>
        </div>
        <a href="javascript:" id="J_goPrevQues" v-if="quesItem['qid']>1" class="ques-btn ques-btn-prev mt30">上一题</a>
      </div>

      <!--done-->
      <div id="J_quesDone" v-if="isDone">
        <div class="ques-done">
          <img src="static/images/character/ques_done.png" alt="done">
          <p class="text-muted">你已完成所有问答试题<br>点击下方按钮查看自己的职业性格测试报告</p>
        </div>
        <a href="user.php?action=character" class="ques-btn ques-btn-primary ques-btn-done">查看报告</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'evaluation',
    data () {
      return {
        isDone: false
      }
    },
    mounted () {
      // let questiondata = '{"title":{"26":"\u54ea\u4e00\u4e2a\u7b54\u6848\u66f4\u63a5\u8fd1\u5730\u63cf\u8ff0\u4e86\u4f60\u81ea\u5df1\u901a\u5e38\u7684\u611f\u53d7\u6216\u884c\u4e3a\u65b9\u5f0f\uff1f","73":"\u4f60\u66f4\u5bb9\u6613\u559c\u6b22\u6216\u503e\u5411\u54ea\u4e00\u4e2a\u8bcd\uff1f\u6ce8\u610f\uff1a\u8fd9\u91cc\u7684\u503e\u5411\u4e0d\u662f\u6307\u4f60\u5411\u5f80\u5f97\u5230\u7684\uff0c\u800c\u662f\u6307\u4f60\u73b0\u5728\u5df2\u7ecf\u5177\u6709\u7684\u3002","93":"\u54ea\u4e00\u4e2a\u7b54\u6848\u66f4\u63a5\u8fd1\u5730\u63cf\u8ff0\u4e86\u4f60\u81ea\u5df1\u901a\u5e38\u7684\u611f\u53d7\u6216\u884c\u4e3a\u65b9\u5f0f\uff1f"},"list":[{"qid":"1","questiontitle":"\u5f53\u4f60\u67d0\u65e5\u60f3\u53bb\u4e00\u4e2a\u5730\u65b9,\u4f60\u4f1a____?","optiona":"\u4e8b\u5148\u8ba1\u5212\u597d\u4e86\uff0c\u7136\u540e\u518d\u53bb","optionb":"\u5148\u53bb\uff0c\u7136\u540e\u968f\u673a\u5e94\u53d8"},{"qid":"2","questiontitle":"\u5982\u679c\u4f60\u662f\u4e00\u4f4d\u8001\u5e08,\u4f60\u613f\u6559____?","optiona":"\u6ce8\u91cd\u5b9e\u8df5\u7684\u8bfe\u7a0b","optionb":"\u6ce8\u91cd\u7406\u8bba\u7684\u8bfe\u7a0b"},{"qid":"3","questiontitle":"\u9047\u5230\u95ee\u9898\u65f6\uff0c\u4f60\u901a\u5e38\u559c\u6b22____?","optiona":"\u548c\u522b\u4eba\u8ba8\u8bba\u89e3\u51b3\u65b9\u6cd5","optionb":"\u81ea\u5df1\u60f3\u529e\u6cd5\u89e3\u51b3"},{"qid":"4","questiontitle":"\u4f60\u8ba4\u4e3a____?","optiona":"\u5f88\u65e9\u5c31\u5e94\u8be5\u5f00\u59cb\u4e3a\u805a\u4f1a\uff0c\u7ea6\u4f1a\u7b49\u505a\u51c6\u5907","optionb":"\u4e0d\u5fc5\u5148\u505a\u51c6\u5907\uff0c\u53bb\u4e86\u4ee5\u540e\u89c1\u673a\u884c\u4e8b"},{"qid":"5","questiontitle":"\u4f60\u901a\u5e38\u548c____\u76f8\u5904\u5f97\u66f4\u597d?","optiona":"\u559c\u6b22\u60f3\u8c61\u7684\u4eba","optionb":"\u6ce8\u91cd\u73b0\u5b9e\u7684\u4eba"},{"qid":"6","questiontitle":"\u4f60\u66f4\u591a\u65f6\u5019\u662f____?","optiona":"\u8ba9\u60c5\u611f\u9a7e\u9a6d\u7406\u667a","optionb":"\u8ba9\u7406\u667a\u9a7e\u9a6d\u60c5\u611f"},{"qid":"7","questiontitle":"\u5f53\u4f60\u548c\u4e00\u7fa4\u4eba\u5728\u4e00\u8d77\u65f6\uff0c\u4f60\u5e38\u5e38\u662f\u66f4\u613f\u610f____?","optiona":"\u52a0\u5165\u5230\u5927\u5bb6\u7684\u8c08\u8bdd\u4e2d\u53bb","optionb":"\u72ec\u81ea\u548c\u719f\u8bc6\u7684\u4eba\u4ea4\u8c08"},{"qid":"8","questiontitle":"\u4f60\u6700\u559c\u6b22____\u505a\u4e8b\u60c5?","optiona":"\u6309\u5174\u81f4","optionb":"\u6309\u8ba1\u5212"},{"qid":"9","questiontitle":"\u4f60\u5e0c\u671b\u81ea\u5df1\u88ab\u770b\u4f5c\u662f\u4e00\u4e2a____?","optiona":"\u5b9e\u5e72\u5bb6","optionb":"\u53d1\u660e\u5bb6"},{"qid":"10","questiontitle":"\u5f53\u522b\u4eba\u95ee\u4f60\u4e00\u4e2a\u95ee\u9898\u65f6\uff0c\u4f60\u7ecf\u5e38\u4f1a____?","optiona":"\u9a6c\u4e0a\u5c31\u505a\u56de\u7b54","optionb":"\u5148\u5728\u8111\u5b50\u91cc\u60f3\u4e00\u60f3"},{"qid":"11","questiontitle":"\u4f60\u559c\u6b22\u4e0e____\u6253\u4ea4\u9053?","optiona":"\u5e38\u6709\u51fa\u4eba\u610f\u6599\u60f3\u6cd5\u7684\u4eba","optionb":"\u6309\u7167\u5e38\u7406\u884c\u4e8b\u7684\u4eba"},{"qid":"12","questiontitle":"\u6309\u65e5\u7a0b\u8868\u529e\u4e8b____?","optiona":"\u6b63\u5408\u4f60\u610f","optionb":"\u675f\u7f1a\u4e86\u4f60"},{"qid":"13","questiontitle":"\u4f60\u89c9\u5f97\u901a\u5e38\u522b\u4eba____?","optiona":"\u8981\u82b1\u5f88\u957f\u7684\u65f6\u95f4\u624d\u80fd\u548c\u4f60\u76f8\u719f","optionb":"\u5f88\u5feb\u5c31\u80fd\u548c\u4f60\u719f\u8bc6"},{"qid":"14","questiontitle":"\u4e3a\u201c\u5982\u4f55\u8fc7\u5468\u672b\u201d\u5b9a\u4e00\u4e2a\u8ba1\u5212____?","optiona":"\u662f\u6709\u5fc5\u8981\u7684","optionb":"\u5b8c\u5168\u6ca1\u5fc5\u8981"},{"qid":"15","questiontitle":"\u4e0b\u5217\u54ea\u4e00\u4e2a\u8bc4\u4ef7\u66f4\u9002\u5408\u4f60?","optiona":"\u6027\u60c5\u4e2d\u4eba","optionb":"\u7406\u667a\u7684\u4eba"},{"qid":"16","questiontitle":"\u66f4\u591a\u7684\u65f6\u5019\uff0c\u4f60\u503e\u5411\u4e8e____?","optiona":"\u72ec\u5904","optionb":"\u540c\u4ed6\u4eba\u5728\u4e00\u8d77"},{"qid":"17","questiontitle":"\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\uff0c\u4f60\u66f4\u559c\u6b22____?","optiona":"\u5728\u65f6\u95f4\u7d27\u8feb\u7684\u60c5\u51b5\u4e0b\uff0c\u4e89\u5206\u593a\u79d2\u5730\u5de5\u4f5c","optionb":"\u505a\u597d\u63d0\u524d\u91cf\uff0c\u5c3d\u65e9\u628a\u5de5\u4f5c\u505a\u5b8c"},{"qid":"18","questiontitle":"\u4f60\u66f4\u613f\u628a____\u4f5c\u4e3a\u670b\u53cb?","optiona":"\u603b\u80fd\u6709\u65b0\u60f3\u6cd5\u7684\u4eba","optionb":"\u811a\u8e0f\u5b9e\u5730\u7684\u4eba"},{"qid":"19","questiontitle":"\u4f60\u662f\u4e00\u4e2a____?","optiona":"\u5174\u8da3\u5e7f\u6cdb\uff0c\u4ec0\u4e48\u90fd\u60f3\u5c1d\u8bd5\u7684\u4eba","optionb":"\u4e13\u6ce8\u7684\u6295\u5165\u67d0\u4e2a\u5174\u8da3\u7684\u4eba"},{"qid":"20","questiontitle":"\u5f53\u4f60\u6709\u4e00\u9879\u7279\u522b\u7684\u5de5\u4f5c\u8981\u505a\u65f6\uff0c\u4f60\u559c\u6b22\u5148____?","optiona":"\u5bdf\u770b\u5230\u5de5\u4f5c\u7684\u5168\u8c8c","optionb":"\u627e\u51fa\u5fc5\u987b\u8981\u505a\u7684\u73af\u8282"},{"qid":"21","questiontitle":"\u4f60\u66f4\u63a5\u53d7____?","optiona":"\u4ee5\u60c5\u52a8\u4eba","optionb":"\u4ee5\u7406\u670d\u4eba"},{"qid":"22","questiontitle":"\u5f53\u4f60\u4e3a\u4e86\u6d88\u9063\u800c\u9605\u8bfb\u65f6\uff0c\u4f60____?","optiona":"\u6b23\u8d4f\u4f5c\u8005\u5947\u7279\u3001\u72ec\u521b\u7684\u8868\u8fbe","optionb":"\u559c\u6b22\u4f5c\u8005\u7684\u8868\u8fbe\u76f4\u63a5\u3001\u660e\u786e"},{"qid":"23","questiontitle":"\u65b0\u8ba4\u8bc6\u4f60\u7684\u4eba____\u4e86\u89e3\u5230\u4f60\u7684\u5174\u8da3\u6240\u5728?","optiona":"\u9a6c\u4e0a\u5c31\u80fd","optionb":"\u53ea\u6709\u771f\u6b63\u548c\u4f60\u719f\u6089\u4ee5\u540e\u624d\u80fd"},{"qid":"24","questiontitle":"\u5728\u65c5\u884c\u65f6\uff0c\u4f60\u559c\u6b22____?","optiona":"\u968f\u5174\u81f4\u884c\u4e8b","optionb":"\u4e8b\u5148\u77e5\u9053\u4e00\u5929\u4e2d\u8be5\u505a\u7684\u4e8b"},{"qid":"25","questiontitle":"\u505a\u8bb8\u591a\u4eba\u90fd\u505a\u7684\u4e8b\u65f6\uff0c\u4f60\u559c\u6b22____?","optiona":"\u6309\u60ef\u4f8b\u53bb\u505a","optionb":"\u53d1\u660e\u81ea\u5df1\u7684\u65b0\u65b9\u6cd5"},{"qid":"26","questiontitle":"\u591a\u6570\u4eba\u8bf4\u4f60\u662f\u4e00\u4e2a____?","optiona":"\u4e0d\u7231\u5410\u9732\u5fc3\u4e8b\u7684\u4eba","optionb":"\u975e\u5e38\u5766\u7387\u7684\u4eba"},{"qid":"27","questiontitle":"","optiona":"\u62bd\u8c61\u7684","optionb":"\u5177\u4f53\u7684"},{"qid":"28","questiontitle":"","optiona":"\u8ba1\u5212","optionb":"\u968f\u610f"},{"qid":"29","questiontitle":"","optiona":"\u6e29\u60c5","optionb":"\u575a\u5b9a"},{"qid":"30","questiontitle":"","optiona":"\u4e8b\u5b9e","optionb":"\u60f3\u6cd5"},{"qid":"31","questiontitle":"","optiona":"\u601d\u7ef4","optionb":"\u60c5\u611f"},{"qid":"32","questiontitle":"","optiona":"\u70ed\u5ff1","optionb":"\u5e73\u9759"},{"qid":"33","questiontitle":"","optiona":"\u8bf4\u670d","optionb":"\u6253\u52a8"},{"qid":"34","questiontitle":"","optiona":"\u9648\u8ff0","optionb":"\u6982\u5ff5"},{"qid":"35","questiontitle":"","optiona":"\u5206\u6790","optionb":"\u540c\u60c5"},{"qid":"36","questiontitle":"","optiona":"\u7cfb\u7edf\u6027","optionb":"\u968f\u673a\u6027"},{"qid":"37","questiontitle":"","optiona":"\u654f\u611f","optionb":"\u7cbe\u786e"},{"qid":"38","questiontitle":"","optiona":"\u7f04\u9ed8","optionb":"\u5065\u8c08"},{"qid":"39","questiontitle":"","optiona":"\u5e38\u8bc6\u6027\u7684","optionb":"\u7406\u8bba\u6027\u7684"},{"qid":"40","questiontitle":"","optiona":"\u4fa0\u809d\u4e49\u80c6","optionb":"\u6df1\u8c0b\u8fdc\u8651"},{"qid":"41","questiontitle":"","optiona":"\u6b63\u5f0f","optionb":"\u975e\u6b63\u5f0f"},{"qid":"42","questiontitle":"","optiona":"\u6c89\u9759","optionb":"\u6d3b\u8dc3"},{"qid":"43","questiontitle":"","optiona":"\u5229\u76ca","optionb":"\u795d\u798f"},{"qid":"44","questiontitle":"","optiona":"\u7406\u8bba\u6027","optionb":"\u786e\u5b9a\u6027"},{"qid":"45","questiontitle":"","optiona":"\u575a\u5b9a\u7684","optionb":"\u5fe0\u8bda\u7684"},{"qid":"46","questiontitle":"","optiona":"\u7406\u60f3","optionb":"\u73b0\u5b9e"},{"qid":"47","questiontitle":"","optiona":"\u96c4\u5fc3","optionb":"\u67d4\u80a0"},{"qid":"48","questiontitle":"","optiona":"\u60f3\u8c61\u4e2d\u7684","optionb":"\u4e8b\u5b9e\u4e0a\u7684"},{"qid":"49","questiontitle":"","optiona":"\u51b7\u9759\u7684","optionb":"\u6fc0\u60c5\u7684"},{"qid":"50","questiontitle":"","optiona":"\u5236\u4f5c","optionb":"\u521b\u9020"},{"qid":"51","questiontitle":"","optiona":"\u70ed\u60c5\u7684","optionb":"\u4e2d\u7acb\u7684"},{"qid":"52","questiontitle":"","optiona":"\u660e\u7406\u7684","optionb":"\u8ff7\u4eba\u7684"},{"qid":"53","questiontitle":"","optiona":"\u6709\u540c\u60c5\u5fc3","optionb":"\u6709\u903b\u8f91\u5934\u8111"},{"qid":"54","questiontitle":"","optiona":"\u751f\u4ea7","optionb":"\u8bbe\u8ba1"},{"qid":"55","questiontitle":"","optiona":"\u51b2\u52a8","optionb":"\u51b3\u62e9"},{"qid":"56","questiontitle":"","optiona":"\u516c\u6b63\u7684","optionb":"\u4f53\u8c05\u7684"},{"qid":"57","questiontitle":"","optiona":"\u5b89\u9759\u7684","optionb":"\u7231\u4ea4\u9645\u7684"},{"qid":"58","questiontitle":"","optiona":"\u7406\u6027","optionb":"\u611f\u6027"},{"qid":"59","questiontitle":"","optiona":"\u4e0d\u53d7\u9650\u5236\u7684","optionb":"\u5b89\u6392\u597d\u7684"},{"qid":"60","questiontitle":"","optiona":"\u5177\u4f53","optionb":"\u62bd\u8c61"},{"qid":"61","questiontitle":"","optiona":"\u80fd\u5e72\u7684","optionb":"\u7ec6\u817b\u7684"},{"qid":"62","questiontitle":"","optiona":"\u5f00\u653e","optionb":"\u79c1\u5bc6"},{"qid":"63","questiontitle":"","optiona":"\u5efa\u9020","optionb":"\u53d1\u660e"},{"qid":"64","questiontitle":"","optiona":"\u6709\u5e8f\u7684","optionb":"\u968f\u4fbf\u7684"},{"qid":"65","questiontitle":"","optiona":"\u60f3\u8c61","optionb":"\u73b0\u5b9e"},{"qid":"66","questiontitle":"","optiona":"\u597d\u80dc\u7684","optionb":"\u597d\u5fc3\u7684"},{"qid":"67","questiontitle":"","optiona":"\u7406\u8bba","optionb":"\u4e8b\u5b9e"},{"qid":"68","questiontitle":"","optiona":"\u5f88\u5c11\u7684\u670b\u53cb","optionb":"\u5f88\u591a\u7684\u670b\u53cb"},{"qid":"69","questiontitle":"","optiona":"\u53ef\u80fd","optionb":"\u786e\u77e5"},{"qid":"70","questiontitle":"","optiona":"\u5bbd\u5bb9\u7684","optionb":"\u575a\u51b3\u7684"},{"qid":"71","questiontitle":"","optiona":"\u65b0\u5f02\u7684","optionb":"\u5df2\u77e5\u7684"},{"qid":"72","questiontitle":"","optiona":"\u6e29\u67d4","optionb":"\u529b\u91cf"},{"qid":"73","questiontitle":"","optiona":"\u5b9e\u7528","optionb":"\u521b\u65b0"},{"qid":"74","questiontitle":"\u548c\u4e00\u7fa4\u4eba\u5728\u4e00\u8d77\u805a\u4f1a\u901a\u5e38\u4f1a\u8ba9\u4f60\u611f\u5230____?","optiona":"\u5174\u81f4\u52c3\u52c3","optionb":"\u7b4b\u75b2\u529b\u5c3d"},{"qid":"75","questiontitle":"\u4f60\u5728\u505a\u4e00\u4e2a\u51b3\u5b9a\u65f6\uff0c\u66f4\u591a\u5730\u4f1a____?","optiona":"\u6743\u8861\u5b9e\u9645\u7684\u5f97\u5931","optionb":"\u8003\u8651\u5176\u4ed6\u4eba\u7684\u611f\u53d7"},{"qid":"76","questiontitle":"\u901a\u5e38\u4f60\u66f4\u559c\u6b22____?","optiona":"\u63d0\u524d\u5b89\u6392\u597d\u8be5\u505a\u4ec0\u4e48","optionb":"\u5230\u65f6\u5019\u7387\u6027\u800c\u4e3a"},{"qid":"77","questiontitle":"\u5f53\u4f60\u4e00\u4e2a\u4eba\u5728\u5bb6\u65f6\uff0c\u4f60____?","optiona":"\u80fd\u591f\u6c89\u9759\u5728\u81ea\u5df1\u7684\u601d\u7ef4\u4e2d","optionb":"\u603b\u89c9\u7684\u5e94\u8be5\u505a\u70b9\u4ec0\u4e48\u4e8b\u60c5"},{"qid":"78","questiontitle":"\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60____?","optiona":"\u968f\u5174\u81f4\u505a\u4e8b","optionb":"\u6309\u65e5\u7a0b\u8868\u505a\u4e8b"},{"qid":"79","questiontitle":"\u4f60\u901a\u5e38____?","optiona":"\u5bb9\u6613\u548c\u5927\u5bb6\u6253\u6210\u4e00\u7247","optionb":"\u72ec\u5904\u7684\u65f6\u5019\u66f4\u591a"},{"qid":"80","questiontitle":"\u4f60\u505a\u4e8b\u66f4\u503e\u5411\u4e8e____?","optiona":"\u7b49\u5230\u5404\u65b9\u9762\u7684\u4fe1\u606f\u90fd\u5168\u4e86\u4ee5\u540e\u518d\u505a\u8ba1\u5212","optionb":"\u63d0\u524d\u5f88\u4e45\u5c31\u5b9a\u8ba1\u5212"},{"qid":"81","questiontitle":"\u522b\u4eba____\u4ea4\u4e0a\u670b\u53cb?","optiona":"\u5bb9\u6613\u548c\u4f60","optionb":"\u8f83\u96be\u548c\u4f60"},{"qid":"82","questiontitle":"\u4f60\u901a\u5e38\u559c\u6b22\u4e0a____\u7684\u8bfe\u7a0b?","optiona":"\u63a2\u8ba8\u7406\u8bba\u548c\u6982\u5ff5","optionb":"\u5217\u4e3e\u4e8b\u5b9e\u548c\u56fe\u8868"},{"qid":"83","questiontitle":"\u5728\u805a\u4f1a\u65f6\uff0c\u4f60____?","optiona":"\u8bf4\u7684\u65f6\u5019\u591a","optionb":"\u542c\u7684\u65f6\u5019\u591a"},{"qid":"84","questiontitle":"\u4f60\u89c9\u7684\u81ea\u5df1\u66f4\u503e\u5411\u4e8e\u662f\u4e00\u4e2a____?","optiona":"\u968f\u610f\u7684\u4eba","optionb":"\u6709\u79e9\u5e8f\u7684\u4eba"},{"qid":"85","questiontitle":"\u4f60________?","optiona":"\u53ea\u540c\u90a3\u4e9b\u5174\u8da3\u76f8\u540c\u7684\u4eba\u624d\u80fd\u957f\u8c08","optionb":"\u53ea\u8981\u613f\u610f\uff0c\u548c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u957f\u804a"},{"qid":"86","questiontitle":"\u5f53\u4f60\u6709\u4e00\u4e2a\u62a5\u544a\u9700\u8981\u5728\u4e00\u4e2a\u661f\u671f\u5185\u4ea4\u51fa\u65f6\uff0c\u4f60____?","optiona":"\u5e38\u7559\u51fa\u8db3\u591f\u7684\u65f6\u95f4\u5e76\u80fd\u63d0\u65e9\u5b8c\u6210","optionb":"\u5e38\u5e38\u662f\u5728\u6700\u540e\u4e00\u523b\u53ca\u65f6\u8d76\u51fa\u6765"},{"qid":"87","questiontitle":"\u54ea\u4e00\u4e2a\u5bf9\u4f60\u6765\u8bf4\u662f\u66f4\u9ad8\u7684\u8bc4\u4ef7?","optiona":"\u6709\u597d\u80dc\u5fc3\u7684","optionb":"\u6709\u540c\u60c5\u5fc3\u7684"},{"qid":"88","questiontitle":"\u4f60\u89c9\u5f97\u6309\u65e5\u7a0b\u8868\u529e\u4e8b____?","optiona":"\u867d\u6709\u5fc5\u8981\uff0c\u4f46\u4e0d\u559c\u6b22","optionb":"\u6709\u5e2e\u52a9\u7684\uff0c\u975e\u5e38\u559c\u6b22"},{"qid":"89","questiontitle":"\u4f60\u66f4\u613f\u5728\u4e00\u4e2a____\u7684\u8001\u677f\u624b\u4e0b\u5de5\u4f5c?","optiona":"\u6001\u5ea6\u4eb2\u5207\uff0c\u4f46\u6709\u65f6\u4f1a\u611f\u60c5\u7528\u4e8b","optionb":"\u6001\u5ea6\u4e25\u5389\uff0c\u4f46\u59cb\u7ec8\u6309\u903b\u8f91\u529e\u4e8b"},{"qid":"90","questiontitle":"\u5728\u5b8c\u6210\u4e00\u9879\u5927\u4efb\u52a1\u65f6\uff0c\u4f60\u5e38\u5e38\u662f____?","optiona":"\u8fb9\u505a\u8fb9\u8003\u8651\u4e0b\u4e00\u6b65","optionb":"\u4e8b\u5148\u60f3\u597d\u6bcf\u4e2a\u6b65\u9aa4"},{"qid":"91","questiontitle":"\u5728\u793e\u4ea4\u573a\u5408\uff0c\u4f60\u901a\u5e38\u89c9\u5f97____?","optiona":"\u5f88\u96be\u548c\u4e0d\u8ba4\u8bc6\u7684\u4eba\u8fdb\u884c\u4ea4\u8c08","optionb":"\u5f88\u5bb9\u6613\u548c\u591a\u6570\u4eba\u8c08\u7b11\u98ce\u751f"},{"qid":"92","questiontitle":"\u4f60\u5e38\u5e38\u662f____?","optiona":"\u6309\u5df2\u7ecf\u6709\u6548\u7684\u65b9\u6cd5\u505a\u4e8b","optionb":"\u5c1d\u8bd5\u4e00\u4e0b\u6709\u6ca1\u6709\u66f4\u597d\u7684\u529e\u6cd5"},{"qid":"93","questiontitle":"\u4f60\u66f4\u559c\u6b22\u6309____\u505a\u4e8b\u60c5?","optiona":"\u5f53\u5929\u7684\u611f\u89c9","optionb":"\u5df2\u8ba2\u597d\u7684\u65e5\u7a0b"}]}'
      //
      // var quesPage = $("#J_quesPage")
      // var qid = 0 // 试题序号
      // var quesTotalNum = 93 // 试题序号
      // var partTitle = "第一部分"
      // var partDesc = '' // 试题分部分标题描述
      // var isDone = false // 试题答完标记
      // var quesGuide = $('#mainguide')
      // var quesData = $.parseJSON(questiondata)
      // partDesc = quesData.title['26']
      //
      // var DoTest = {
      //   init: function () {
      //     var _this = this
      //     _this.startEvent()
      //     _this.nextQuesEvent()
      //     _this.quesPartTipsEvent()
      //     _this.prevStepEvent()
      //   },
      //
      //   /* 开始 */
      //   startEvent: function () {
      //     $('.J_beginTest').not(":disabled").click(function (e) {
      //       quesGuide.hide()
      //       quesPage.show()
      //       DoTest.nextStep(quesData, qid)
      //       DoTest.updateHtml()
      //       $("#J_quesStart").show()
      //     });
      //   },
      //
      //   /* 下一题 */
      //   nextQuesEvent: function () {
      //     $("#J_quesPage").on("click", "#J_quesList .ques-item-answer", function () {
      //       var _this = $(this)
      //       _this.addClass("selected").siblings().removeClass("selected")
      //
      //       /* 记录答题结果 */
      //       var timer = null
      //       clearTimeout(timer)
      //       timer = setTimeout(function () {
      //         if (qid < 93) {
      //           $('#q' + (qid + 1)).val(_this.data('id'))
      //           qid++
      //           DoTest.nextStep(quesData, qid)
      //         }
      //       }, 100)
      //     })
      //   },
      //
      //   /* 试题分部分提示 */
      //   quesPartTipsEvent: function () {
      //     $("#J_quesPage").on("click", "#J_quesPartTips", function () {
      //       $("#J_quesStart").hide()
      //       $("#J_quesList").show()
      //     });
      //   },
      //
      //   /* 上一题 */
      //   prevStepEvent: function () {
      //     $("#J_quesPage").on("click", "#J_goPrevQues", function () {
      //       if (qid > 0) {
      //         qid--
      //         DoTest.nextStep(quesData, qid)
      //         if (qid === 0) {
      //           DoTest.updateHtml()
      //           $("#J_quesList").show()
      //           $("#J_quesStart").hide()
      //         }
      //       }
      //     })
      //   },
      //   updateHtml: function (cb) {
      //     qid = qid > 92 ? qid = 92 : qid
      //     var quesDataList = quesData["list"]
      //     quesPage.html(template("tpl_ques", {
      //       isDone: isDone,
      //       partTitle: partTitle,
      //       partDesc: partDesc,
      //       quesItem: quesDataList[qid]
      //     }))
      //
      //     /* 标记上次选择 */
      //     var chooseId = $('#q' + (qid + 1)).val()
      //     if (chooseId) {
      //       $("#J_quesList").find("[data-id=" + chooseId + "]").append(" <small style='float:right;color:#999;'>已选择</small>")
      //     }
      //   },
      //   nextStep: function (quesData, qid) {
      //
      //     isDone = false
      //
      //     if (qid < 26 && qid >= 0) {
      //       partTitle = "第一部分"
      //       partDesc = quesData.title['26']
      //     }
      //     else if (qid >= 26 && qid < 73) {
      //       partTitle = "第二部分"
      //       partDesc = quesData.title['73']
      //     }
      //     else if (qid >= 73) {
      //       partTitle = "第三部分"
      //       partDesc = quesData.title['93']
      //     }
      //
      //     DoTest.updateHtml()
      //     $("#J_quesList").show()
      //
      //     if (qid === 0 || qid === 26 || qid === 73) {
      //       DoTest.updateHtml()
      //       $("#J_quesList").hide()
      //       $("#J_quesStart").show()
      //     }
      //
      //     /*试题做完*/
      //     if (qid >= quesTotalNum) {
      //       layer.open({type: 2, content: "正在提交结果..."})
      //       $("#J_quesList").hide()
      //       $("#J_quesStart").hide()
      //       $.post('character.php?action=mbti', $('#form1').serialize(), function (data) {
      //         layer.closeAll()
      //         if (data.ret == 100) {
      //           isDone = true
      //           DoTest.updateHtml()
      //         } else {
      //           alert('测试错误！')
      //         }
      //       }, 'json')
      //     }
      //   }
      // }
      // DoTest.init()
    }
  }
</script>

<style scoped>

</style>
