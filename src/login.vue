<template>
  <header class="htmleaf-header">
    <h1>《人生重来公司》故事编辑器</h1>
    <div class="htmleaf-links"></div>
  </header>
  <div
    class="demo form-bg"
    style="
      background-color: #4c4c5c;
      padding: 50px;
      width: 100%;
      height: 100%;
      position: fixed;
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <form class="form-horizontal">
            <span class="heading">安全验证</span>
            <div class="form-group">
              <input
                type="username"
                class="form-control"
                id="username"
                placeholder="管理员账号"
              />
              <i class="fa fa-user"></i>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="密码"
              />
              <i class="fa fa-lock"></i>
            </div>
            <div class="form-group">
              <div class="main-checkbox">
                <input
                  type="checkbox"
                  value="None"
                  id="checkbox1"
                  name="check"
                />
                <label for="checkbox1"></label>
              </div>
              <span class="text">记住我</span>
              <button @click="loginRequest" class="btn btn-info">立刻登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    toHome() {
      this.router.push({ name: "home" });
    },
    loginRequest() {
      let unit = new FormData();
      
      unit.append("username", document.getElementById('username').value);
      unit.append("password", document.getElementById('password').value);
      this.axios
        .post("http://localhost:8848/login", unit)
        .then((response) => {
          if (this.result(response)) {
            this.login(response.data.extended.token);
            // alert("登录成功");
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },
    login(token){
      this.axios.defaults.headers.common["token"] = token;
      this.toHome();
    },

    // 处理返回信息
    result(response) {
      if (response.data.code == 200) {
        return true;
      } else {
        alert(response.data.message);
        return false;
      }
    },
  },
};
</script>

<style>
/* Header */
.htmleaf-header {
  padding: 1em 190px 1em;
  letter-spacing: -1px;
  text-align: center;
  background: #66677c;
}
.htmleaf-header h1 {
  color: #d5d6e2;
  font-weight: 600;
  font-size: 2em;
  line-height: 1;
  margin-bottom: 0;
}
.htmleaf-header h1 span {
  display: block;
  font-size: 60%;
  font-weight: 400;
  padding: 0.8em 0 0.5em 0;
  color: #c3c8cd;
}
/* Top Navigation Style */
.htmleaf-links {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  font-size: 1.5em;
  text-align: center;
}
/* footer */
.htmleaf-footer {
  width: 100%;
  padding-top: 10px;
}

.form-horizontal {
  background: #fff;
  padding-bottom: 40px;
  border-radius: 15px;
  text-align: center;
}
.form-horizontal .heading {
  display: block;
  font-size: 35px;
  font-weight: 700;
  padding: 35px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 30px;
}
.form-horizontal .form-group {
  padding: 0 40px;
  margin: 0 0 25px 0;
  position: relative;
}
.form-horizontal .form-control {
  background: #f0f0f0;
  border: none;
  border-radius: 20px;
  box-shadow: none;
  padding: 0 20px 0 45px;
  height: 40px;
  transition: all 0.3s ease 0s;
}
.form-horizontal .form-control:focus {
  background: #e0e0e0;
  box-shadow: none;
  outline: 0 none;
}
.form-horizontal .form-group i {
  position: absolute;
  top: 12px;
  left: 60px;
  font-size: 17px;
  color: #c8c8c8;
  transition: all 0.5s ease 0s;
}
.form-horizontal .form-control:focus + i {
  color: #00b4ef;
}
.form-horizontal .fa-question-circle {
  display: inline-block;
  position: absolute;
  top: 12px;
  right: 60px;
  font-size: 20px;
  color: #808080;
  transition: all 0.5s ease 0s;
}
.form-horizontal .fa-question-circle:hover {
  color: #000;
}
.form-horizontal .main-checkbox {
  float: left;
  width: 20px;
  height: 20px;
  background: #11a3fc;
  border-radius: 50%;
  position: relative;
  margin: 5px 0 0 5px;
  border: 1px solid #11a3fc;
}
.form-horizontal .main-checkbox label {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.form-horizontal .main-checkbox label:after {
  content: "";
  width: 10px;
  height: 5px;
  position: absolute;
  top: 5px;
  left: 4px;
  border: 3px solid #fff;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.form-horizontal .main-checkbox input[type="checkbox"] {
  visibility: hidden;
}
.form-horizontal .main-checkbox input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
.form-horizontal .text {
  float: left;
  margin-left: 7px;
  line-height: 20px;
  padding-top: 5px;
  text-transform: capitalize;
}
.form-horizontal .btn {
  float: right;
  font-size: 14px;
  color: #fff;
  background: #00b4ef;
  padding: 10px 25px;
  border: none;
  text-transform: capitalize;
  transition: all 0.5s ease 0s;
}
@media only screen and (max-width: 479px) {
  .form-horizontal .form-group {
    padding: 0 25px;
  }
  .form-horizontal .form-group i {
    left: 45px;
  }
  .form-horizontal .btn {
    padding: 10px 20px;
  }
}
</style>