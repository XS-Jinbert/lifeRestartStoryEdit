<template>
  <panel
    :list="list"
    :tableName="tableName"
    :tableTitles="tableTitles"
    :attList="attList"
    :modalTitles="modalTitles"
    :searchlist="searchlist"
    @addItemRequest="addItemRequest"
    @updateItemRequest="updateItemRequest"
    @deleteItemRequest="deleteItemRequest"
    @searchItemsRequest="searchItemsRequest"
  />
</template>


<script>
import datapanel from "./basepanel/datapanel.vue";
export default {
  components: {
    panel: datapanel,
  },
  data() {
    return {
      tableName: "人生选择：选择编辑",
      tableTitles: ["选择ID", "选择名字", "选择描述"],
      modalTitles: {
        add: "添加选择",
        delete: "删除",
        update: "修改选择信息",
        info: "选择详情",
      },
      attList: {
        achID: { name: "选择标识", type: "number" },
        name: { name: "选择名字", type: "text" },
        description: { name: "选择描述", type: "text" },
      },
      list: [],
      searchlist: [],
    };
  },
  methods: {
    GetAllItem() {
      console.log("请求ing");
      if (this.axios.defaults.headers.common["token"] == null) {
        this.router.push({ name: "login" });
      } else {
        this.axios
          .get("http://localhost:8848/choose/findAll")
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

    // 更新查询出来的队列
    GetSearchItems() {
      if (this.searchunit != null) {
        this.searchItemsRequest(this.searchunit);
      }
    },

    // 添加请求
    addItemRequest(unit) {
      // 发送请求
      this.axios
        .post("http://localhost:8848/choose/add", unit)
        .then((response) => {
          if (this.result(response)) {
            this.GetAllItem();
            this.GetSearchItems();
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 修改请求
    updateItemRequest(unit) {
      // 发送请求
      this.axios
        .post("http://localhost:8848/choose/update", unit)
        .then((response) => {
          if (this.result(response)) {
            this.GetAllItem();
            this.GetSearchItems();
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 删除请求
    deleteItemRequest(unit) {
      // 发送请求
      this.axios
        .delete("http://localhost:8848/choose/delete", { data: unit })
        .then((response) => {
          if (this.result(response)) {
            this.GetAllItem();
            this.GetSearchItems();
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 查询请求
    searchItemsRequest(unit) {
      // 发送请求
      this.searchunit = unit;
      this.axios
        .post("http://localhost:8848/choose/select", unit)
        .then((response) => {
          if (this.result(response)) {
            this.searchlist = response.data.extended.list;
            this.GetAllItem();
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
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
};
</script>

<style lang="scss" scoped>
</style>