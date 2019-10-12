<template>
  <div class="index-container">
    <!-- <el-carousel height="420px">
      <el-carousel-item v-for="(item, index)  in bannerArr" :key="index">
        <div class="banner-item" :class=" 'banner' + index">
          <h3>{{item.title}}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>-->
    <Banner></Banner>
    <div class="index-item item-1">
      <div class="item-title">
        <h1>总体流程</h1>
        <h4>THE OVERALL PROCESS</h4>
      </div>
      <div class="item-show item-show-1">
        <div class="show-left">
          <ul class="show-1-list">
            <li>一键开户</li>
            <li>填写预约信息</li>
            <li>确认开户信息</li>
            <li>预约开户成功</li>
            <li>法定代表人视频录制</li>
          </ul>
        </div>
        <div class="show-right">
          <img src="../../static/images/problemListBg.png" alt />
        </div>
      </div>
    </div>
    <!-- <div class="items-2">
      <div class="index-item item-2">
        <div class="item-title">
          <h1>我们的解决方案</h1>
          <h4>OUR SOLUTION</h4>
        </div>
        <img src="../../static/images/solutionss.png" style="margin-top:50px;" alt />
        <el-button type="primary" plain class="look-btn">点击查看</el-button>
      </div>
    </div>-->
    <div class="index-item item-3">
      <div class="every-item-3" v-for="(item, index) in every3">
        <div class="img-w">
          <img :src="item.src" style="width:80px;height:80px;" alt />
        </div>
        <h1>{{item.title}}</h1>
        <p style="margin:0 70px">{{item.str}}</p>
      </div>
    </div>

    <div class="index-item item-4">
      <div class="item-title">
        <h1>我们的服务</h1>
        <h4>THE INDUSTRY WE SERVE</h4>
      </div>
      <div class="every-item-4">
        <div v-for="(item, index) in every4" class="item-4-list">
          <img :src="item.src" alt />
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <!-- <div class="index-item item-5">
      <div class="item-title">
        <h1>合作伙伴</h1>
        <h4>CASE OF COOPERATION</h4>
      </div>
      <div>
        <img style="width:100%; margin-top:60px;" src="../../static/images/cooListPic.png" alt />
      </div>
    </div>-->
    <div class="index-item item-6">
      <div class="item-title">
        <h1>增值服务</h1>
        <h4>VALUE-ADDED SERVICE</h4>
      </div>
      <div class="every-item-6">
        <div class="item-6-list" style="background:#242b3f;">
          <ul style="margin-left:60px;margin-top:40px;">
            <h1 style="color:#ffff;margin-bottom:15px;font-size:22px;font-weight:500;">
              创业服务
              <span style="color:#ffff;font-size:12px;font-weight:500;">ENTREPRENEURIAL SERVICE</span>
            </h1>
            <li>（一）公章管理</li>
            <li>（二）每月税务代缴</li>
            <li>（三）每月发票代开</li>
            <li>（四）免费工商年报</li>
            <li>（五）财税优化方案定制</li>
          </ul>
        </div>
        <div class="item-6-list">
          <img src="/../../static/images/add_1.png" alt />
        </div>
        <div class="item-6-list">
          <img style="width:599px;height:290px;" src="/../../static/images/add_2.png" alt />
        </div>
        <div class="item-6-list" style="background:#ededed;">
          <ul style="margin-left:60px;margin-top:40px;">
            <h1 style="color:#333;margin-bottom:15px;font-size:22px;font-weight:500;">
              结算服务
              <span style="color:#333;font-size:12px;font-weight:500;">SETTLEMENT SERVICE</span>
            </h1>
            <li class="last-list-item">（一）智能结算：通过智能化技术手段，为客户提供高效准确的结算服务。</li>
            <li class="last-list-item">（二）优惠套餐：根据开通的业务 可享受巨大优惠</li>
          </ul>
        </div>
      </div>
      <div class="index-item item-7">
        <div class="item-title">
          <h1>筑商精神</h1>
          <h4>THE BUILDING MERCHANTS SPIRIT</h4>
        </div>
        <el-carousel style="margin-top:60px;" :interval="3000" type="card" height="390px">
          <el-carousel-item v-for="(item, index)  in bannerArr" :key="index">
            <!-- <h3 style="text-align:center;color:#333;">{{ item.title }}</h3> -->
            <img :src="item.image" alt style="width:600px;height:390px;" />
          </el-carousel-item>
        </el-carousel>
       
        <div class="every-item-7">
          <div class="item-7-list" v-for="item in articleArr">
            <p class="item-7-tips">{{item.title}}</p>
            <li v-for="chil in item.list" @click="goNews(chil)">
              <p>{{chil.actH}}</p>
              <p>{{chil.time}}</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'   //轮播组件
export default {
  name: "Index",
  data() {
    return {
      bannerArr: [
        { title: "banner1", image:require("../../static/images/dBanner1.jpg") },
        { title: "banner2", image:require("../../static/images/dBanner2.png") },
        { title: "banner3", image:require("../../static/images/dBanner3.jpg") }
      ],
      every3: [
        {
          title: "系统职能化",
          str:
            "引导个人转变为创客（个体工商户），个人仅需提交基本资料，由好活全程智能化办理个体工商户，助力企业快速实现组织小微化。",
          src: require("../../static/images/hover1.png")
        },
        {
          title: "系统智能化",
          str:
            "好活通过云计算智能系统帮助企业完成发单、审核、结算等全程智能化服务，同时平台也为个体工商户提供年报年检等智能化服务。",
          src: require("../../static/images/hover2.png")
        },
        {
          title: "薪酬费用化",
          str:
            "企业原有的薪酬成本支出，转变为费用支出。 平台开具增值税专用发票可进项抵扣。",
          src: require("../../static/images/hover3.png")
        },
        {
          title: "业务标准化",
          str:
            "通过平台将业务形成一个个标准件外包出去，并按服务效果付费，帮助企业实现标准件盈利模型。",
          src: require("../../static/images/hover4.png")
        }
      ],
      every4: [
        { title: "经营许可证", src: require("../../static/images/1.png") },
        { title: "公章", src: require("../../static/images/5.png") },
        { title: "对公账户", src: require("../../static/images/4.png") },
        { title: "开票信息", src: require("../../static/images/6.png") }
      ],
      articleArr:[
          {title:'常见为题',list:[
              {actH:"电商执照有法律效力吗？哪些平台可用？",time:' 2019-08-27 10:33:00',ans:'<p>电商营业执照跟实体营业执照一样，都是根据市场监督管理局的规定进行办理的，具备同等法律效力。执照适用于淘宝、天猫等各类电商平台</p>。'},
              {actH:"办照过程麻烦吗？需要我做什么？",time:' 2019-07-27 16:21:00',ans:'<p>电商营业执照跟实体营业执照一样，都是根据市场监督管理局的规定进行办理的，具备同等法律效力。执照适用于淘宝、天猫等各类电商平台。<p>'},
              {actH:"注册什么类型不需要纳税？",time:' 2019-08-27 10:33:00',ans:'<p>无论您注册哪种类型，都需要记账报税。</p><p>纳税方面，个体工商户和个人独资企业缴纳个人所得税，有限公司缴纳企业所得税，其他缴纳税种类基本没有差异。</p>'},
              {actH:"要是对服务不满意，我该怎么办？",time:' 2019-08-27 10:33:00',ans:'若您对服务有任何不满，可随时在<b>筑商科技</b>上留言反馈'}
            ]},
          {title:'筑商动态',list:[
              {actH:"收到的网银工具不会用怎么办？",time:' 2019-08-27 10:33:00',ans:'经常有朋友咨询收到中国银行的企业网银工具后该如何激活使用，今天小筑就为大家做了个教程：<p>收到的快递中有两个U盾，一个经办，一个授权其中经办对应申请开户时上传的另一人身份证，经办密码发送至经办人手机号；授权对应法人，即经营者，授权密码发送至法人手机号使用对公账户转账，需要先使用经办发起申请，再由授权确认交易下面请收看收到网银工具后如何激活使用</p>',vSrc:'http://mpvideo.qpic.cn/tjg_3884132096_50000_a8eebdf096d64e138666b58facd99d79.f10002.mp4?dis_k=f4d88210798076f5779eb1cfc3df00af&dis_t=1570859792'},
              {actH:"一文读懂个体工商户和个人独资企业的区别",time:' 2019-08-27 10:33:00',ans:"书接上文，合规经营的第一步便是进行市场主体登记，但对个人创业者来说，摆在面前的第一大难题就是如何选择适合自己的注册类型，本期小筑就带大家一起了解常见的个体工商户和个人独资企业究竟有何区别?<p class='act-con'><strong>个体工商户，</strong>依照《民法通则》规定设立，是指生产资料属于私人所有，主要以个人劳动为基础，劳动所得归个体劳动者自已支配的一种经济形式。 </p>      <p class='act-con'> <strong>个人独资企业，</strong>依照《个人独资企业法》规定设立，是指由一个自然人投资，全部资产为投资人个人所有，投资人以其个人(或者家庭)财产对企业债务承担无限责任的经营实体。"}
            ]}
       ]
    }
  },
  methods:{
    goNews(item){
      // console.log(item);
      this.$router.push({
        name:'News',
        query:{
          item:item
        }
      })
    }
  },
  components:{
      Banner
    }
};
</script>

<style>
@import url(../../static/css/index.css);
</style>

