<template>
  <div class="prodect-container">
    <div class="like-banner" id="pd">筑商智能综合服务平台</div>
    <div class="pd-content">
      <h1 class="pd-des">
        <p>筑商智能综合服务平台是由共享经济服务平台、</p>
        <p>筑商小程序-筑商科技以及政府大数据协同监管平台组成的智能综合服务体系。</p>
      </h1>
      <div class="pd-item pd-1">
        <h1>营业执照办理</h1>
        <p>THE MICRO-ELECTRONIC COMMERCE BUSINESS</p>
        <img class="big-img" style="width:800px;" src="../../static/images/yyzz.jpeg" alt />
        <h1 class="pd-des">
          <p>服务于个体工商户和个人独资企业</p>
          <p>在线核名 产询 办理,全程流程线上走通</p>
          <p>一步办理 公章管理 对公账户 开票信息</p>
        </h1>
        <div class="pd-1-list" style="margin:30px 0;">
          <div>
            <img src="../../static/images/add1.png" alt />
          </div>
          <div class="list-str">
            <h3>标准业务</h3>
            <p>筑商平台针对企业用工场景，为企业提供业务标准化模板，让企业形成明确单价、审核标准、按单计费的标准件，并发布到筑商系统，进行智能精准匹配。</p>
          </div>
          <div class="list-str">
            <h3>自动办理</h3>
            <p>阿里机器人自动审核，无需人工操作</p>
          </div>
          <div>
            <img src="../../static/images/add2.png" alt />
          </div>
          <div>
            <img src="../../static/images/add3.png" alt />
          </div>
          <div class="list-str">
            <h3>高效服务</h3>
            <p>筑商小程序，微信公众号多途径提供服务，人工客服在线解答。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-item pd-item-2">
      <h1 style="color:#ffffff;">对公账户</h1>
      <p style="color:#ffffff;">E-COMMERCE LINK ACCESS SERVICE</p>
      <h1 class="pd-des">
        <p style="color:#ffffff;">开具增值税发票，银行交易流水可以很好的证明发票业务的资金流。</p>
        <p style="color:#ffffff;">银行转账，提高效率，预防出现错误的可能。记录发生额，一切都有据可依。</p>
      </h1>
      <div style="width:800px;margin:30px auto;">
        <el-steps :active="2" simple>
          <el-step title="注册账号" icon="el-icon-edit"></el-step>
          <el-step title="选择主题类型" icon="el-icon-upload"></el-step>
          <el-step title="填写相关信息" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <ul class="list-tool">
        <li v-for="item of listStr" v-text="item"></li>
      </ul>
      <h1 class="pd-des">
        <p style="color:#ffffff;">C端通过小程序可享受个体工商户注册、接取工单、业务自动化申报、高效结算等服务。</p>
      </h1>
      <div class="phone-four">
        <div v-for="item in phone">
          <img class="four-img" :src="item.src" alt />
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="pd-item pd-3">
      <h1 style="margin-top:40px;">公章管理</h1>
      <p>SUPPLY CHAIN BUSINESS OF INDUSTRIAL CLUSTER</p>

      <h1 class="pd-des">
        <p>在线上传公章，轻松走通银行通道</p>
        <p>个人，公章统一妥善储藏</p>
      </h1>
      <img class="big-img" width="800px" src="../../static/images/dBanner2.png" alt />
      <div class="pd-last-item">
        <div v-for="item in lastItem">
          <img class="big-img" :src="item.src" alt />
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prodect",
  data() {
    return {
      listStr: [
        "全程在线办理",
        "T+1出照",
        "可注册可注销",
        "免费年报年检免费",
        "税务申报及缴纳",
        "3万以下月收入完全免税"
      ],
      phone: [
        {
          title: "个人中心",
          src: require("../../static/images/cut1.jpg")
        },
        {
          title: "输入邀请码",
          src: require("../../static/images/cut2.jpg")
        },
        {
          title: "字号核名",
          src: require("../../static/images/cut3.jpg")
        },
        {
          title: "自动查重",
          src: require("../../static/images/cu4.jpg")
        }
      ],
      lastItem: [
        { title: "企业", src: require("../../static/images/guan1.png") },
        { title: "个人", src: require("../../static/images/guan2.png") },
        { title: "税务", src: require("../../static/images/guan3.png") },
        { title: "票据", src: require("../../static/images/guan4.png") },
        { title: "业务", src: require("../../static/images/guan5.png") }
      ]
    };
  }
};
</script>

<style>
@import url(../../static/css/Prodect.css);
.four-img {
  width: 226px;
  border-radius: 15px;
}
#pd{
  background:url(../../static/images/pBanner.png);
}
</style>