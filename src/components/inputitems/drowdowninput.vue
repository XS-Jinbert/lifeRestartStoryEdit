<template>
  <input
    :id="id"
    :name="name"
    :list="id+99"
    class="form-control"
    :placeholder="placeholder"
    min="0"
  />
  <datalist :id="id+99">
    <template v-for="(item, key, index) in list" :key="index + item">
      <option :value="getattName(item)">{{ item.name }}</option>
    </template>
  </datalist>
  <!-- /input-group -->
</template>

<script>
export default {
  props: ["url", "id", "name", "type", "placeholder"],
  data() {
    return {
      list: [],
    };
  },
  methods: {
    GetAllItem() {
      if (this.axios.defaults.headers.common["token"] == null) {
        this.router.push({ name: "login" });
      } else {
        this.axios
          .get(this.url + "findAll")
          .then((response) => {
            if (this.result(response)) {
              this.list = response.data.extended.list;
            }
          })
          .catch(function (error) {
            // 请求失败处理
            console.log("请求失败");
            console.log(error);
          });
      }
    },
    // 获取ID字段
    getattName(item) {
      for (var i in item) {
        return item[i];
      }
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
  created() {
    this.GetAllItem();
  },
  activated(){
    this.GetAllItem();
  },
};
</script>