<template>
  <!--职业性格测试-->
  <div class="tab-content">
    <div class="t-head">
      <h2 class="main-title mb10">职业性格测试</h2>
      <p class="sub-title">为能力提升找到最佳学习方案</p>
    </div>

    <div class="t-body">
      <div class="desc">
        职业性格测评即通过测试了解求职者或雇员的职业性格。而一个好的职业性格测评系统，应以科学的心理学理论为依据，通过标准化的手段来了解个体性格，预测个体将来的工作绩效。
      </div>
      <p class="text-muted mb1 tc">
        题目没有对错之分，请根据实际情况选择。
      </p>
      <p class="text-primary mt1 tc">
        （本测试共92道题）
      </p>
    </div>
    <div class="t-footer">
      <router-link class="btn btn-lg btn-primary round btn-block" :to="{name: 'mbtistart', params: {part:'tab1'}}">开始测试</router-link>
    </div>
  </div>
</template>
