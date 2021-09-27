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
import { useRouter } from "vue-router";
export default {
  components: {
    panel: datapanel,
  },
  data() {
    return {
      router: useRouter(),
      tableName: "基础信息：世界编辑",
      tableTitles: ["世界ID", "世界名字", "世界描述", "世界价值"],
      modalTitles: {
        add: "添加世界",
        delete: "删除",
        update: "修改世界信息",
        info: "世界详情",
      },
      attList: {
        worldID: { name: "世界标识", type: "number" },
        name: { name: "世界名字", type: "text" },
        description: { name: "世界描述", type: "text" },
        lifePoint: { name: "世界价值", type: "number" },
      },
      list: [],
      searchlist: [],
      searchunit: null,
    };
  },
  methods: {
    tologin() {
      this.router.push({ name: "login" });
    },
    GetAllItem() {
      console.log("请求ing");
      if (this.axios.defaults.headers.common["token"] == null) {
        this.tologin();
      } else {
        this.axios
          .get("http://localhost:8848/world/findAll")
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
      console.log(unit);
      this.axios
        .post("http://localhost:8848/world/add", unit)
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
      console.log(unit);
      this.axios
        .post("http://localhost:8848/world/update", unit)
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
      console.log(unit);
      this.axios
        .delete("http://localhost:8848/world/delete", { data: unit })
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
      console.log(unit);
      this.searchunit = unit;
      this.axios
        .post("http://localhost:8848/world/select", unit)
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