<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">人生重来公司故事编辑系统</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a>Jinbert Search</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >导出数据 <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a>导出判定条件</a></li>
              <li><a>导出执行效果</a></li>
              <li><a>导出人生事件配置</a></li>
              <li><a @click="GetChoose">导出人生选择配置</a></li>
              <li><a>导出人物特点配置</a></li>
              <li><a @click="GetAgeConfig">导出年龄随机事件配置</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import fileDownload from "js-file-download";
export default {
  data(){
    return {
      url:"/output/"
    }
  },
  methods: {
    // 导出人生事件
    GetEvent() {
      this.axios
        .get(this.url + "outputEvent", { responseType: "json" })
        .then((res) => {
          fileDownload(JSON.stringify(res.data.extended.list), "LifeEvent.json");
        })
        .catch(function (error) {
          // 请求失败处理
          alert("服务器错误或网络异常！");
          console.log(error);
        });
    },
    // 导出人生选择
    GetChoose() {
      this.axios
        .get(this.url + "outputChoose", { responseType: "json" })
        .then((res) => {
          fileDownload(JSON.stringify(res.data.extended.list), "Choose.json");
        })
        .catch(function (error) {
          // 请求失败处理
          alert("服务器错误或网络异常！");
          console.log(error);
        });
    },
    // 导出人物特点
    GetChar() {
      this.axios
        .get(this.url + "outputChar", { responseType: "json" })
        .then((res) => {
          fileDownload(JSON.stringify(res.data.extended.list), "Characteristic.json");
        })
        .catch(function (error) {
          // 请求失败处理
          alert("服务器错误或网络异常！");
          console.log(error);
        });
    },
    // 导出执行效果
    GetEffect() {
      this.axios
        .get(this.url + "outputEffect", { responseType: "json" })
        .then((res) => {
          fileDownload(JSON.stringify(res.data.extended.list), "Effect.json");
        })
        .catch(function (error) {
          // 请求失败处理
          alert("服务器错误或网络异常！");
          console.log(error);
        });
    },
    // 导出判定条件
    GetClude() {
      this.axios
        .get(this.url + "outputClude", { responseType: "json" })
        .then((res) => {
          fileDownload(JSON.stringify(res.data.extended.list), "Clude.json");
        })
        .catch(function (error) {
          // 请求失败处理
          alert("服务器错误或网络异常！");
          console.log(error);
        });
    },
    // 导出年龄配置
    GetAgeConfig() {
      this.axios
        .get(this.url + "outputAgeConfig",{ responseType: "json" } )
        .then((res) => {
          fileDownload(JSON.stringify(res.data.extended.list), "AgeConfig.json");
        })
        .catch(function (error) {
          // 请求失败处理
          alert("服务器错误或网络异常！");
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>