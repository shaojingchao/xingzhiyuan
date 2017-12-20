const industryList = [
  {"name": "IT|互联网|通信", "id": "1"},
  {"name": "传媒|印刷|艺术|设计", "id": "2"},
  {"name": "生产制造", "id": "3"},
  {"name": "房产|建筑|物业管理", "id": "4"},
  {"name": "销售|客服|市场", "id": "5"},
  {
    "name": "能源|环保|农业|科技",
    "id": "6"
  }, {"name": "项目|质量|高级管理", "id": "7"}, {"name": "服务业", "id": "8"}, {
    "name": "咨询|法律|教育|翻译",
    "id": "9"
  }, {"name": "采购|贸易|交通|物流", "id": "10"}, {"name": "金融", "id": "11"}, {"name": "财务|人力资源|行政", "id": "12"}]


const industryCate = [["1", "IT|\u4e92\u8054\u7f51|\u901a\u4fe1"], ["2", "\u4f20\u5a92|\u5370\u5237|\u827a\u672f|\u8bbe\u8ba1"], ["3", "\u54a8\u8be2|\u6cd5\u5f8b|\u6559\u80b2|\u7ffb\u8bd1"], ["4", "\u623f\u4ea7|\u5efa\u7b51|\u7269\u4e1a\u7ba1\u7406"], ["5", "\u670d\u52a1\u4e1a"], ["6", "\u751f\u4ea7|\u5236\u9020"], ["7", "\u80fd\u6e90|\u73af\u4fdd|\u519c\u4e1a|\u79d1\u7814"], ["8", "\u8d22\u52a1|\u4eba\u529b\u8d44\u6e90|\u884c\u653f"], ["9", "\u91c7\u8d2d|\u8d38\u6613|\u4ea4\u901a|\u7269\u6d41"], ["10", "\u91d1\u878d"], ["11", "\u9500\u552e|\u5ba2\u670d|\u5e02\u573a"], ["12", "\u9879\u76ee|\u8d28\u91cf|\u9ad8\u7ea7\u7ba1\u7406"]]
const industryJob = [{
  "id": "1",
  "title": "IT\u7ba1\u7406/\u9879\u76ee\u534f\u8c03",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "11425",
  "master_ratio": "0.69313526856415",
  "female_ratio": "0.098865665157388"
}, {
  "id": "2",
  "title": "\u4ea7\u54c1",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "11028",
  "master_ratio": "0.6792710141334",
  "female_ratio": "0.34949002617565"
}, {
  "id": "6",
  "title": "\u8f6f\u4ef6/\u4e92\u8054\u7f51\u5f00\u53d1/\u7cfb\u7edf\u96c6\u6210",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "9944",
  "master_ratio": "0.6948790786084",
  "female_ratio": "0.17845615033594"
}, {
  "id": "21",
  "title": "\u7535\u4fe1/\u901a\u4fe1\u6280\u672f\u5f00\u53d1\u53ca\u5e94\u7528",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "7358",
  "master_ratio": "0.57031482076495",
  "female_ratio": "0.11110300750437"
}, {
  "id": "22",
  "title": "\u786c\u4ef6\u5f00\u53d1",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "7341",
  "master_ratio": "0.58905428923846",
  "female_ratio": "0.070252854985858"
}, {
  "id": "30",
  "title": "\u8fd0\u8425",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "6763",
  "master_ratio": "0.44475402504472",
  "female_ratio": "0.45532885409604"
}, {
  "id": "33",
  "title": "IT\u8d28\u91cf\u7ba1\u7406/\u6d4b\u8bd5/\u914d\u7f6e\u7ba1\u7406",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "6564",
  "master_ratio": "0.49363845488599",
  "female_ratio": "0.36865124323284"
}, {
  "id": "42",
  "title": "IT\u8fd0\u7ef4/\u6280\u672f\u652f\u6301",
  "cateid": "1",
  "catename": "IT|\u4e92\u8054\u7f51|\u901a\u4fe1",
  "salary": "6029",
  "master_ratio": "0.4485861984635",
  "female_ratio": "0.12990250478364"
}]
const industry = {
  list: industryList,
  cate: industryCate,
  job: industryJob,
}
export default industry
