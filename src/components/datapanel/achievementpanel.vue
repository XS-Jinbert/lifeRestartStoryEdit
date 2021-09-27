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
      tableName: "成就编辑",
      tableTitles: ["成就ID", "成就名字", "成就描述"],
      modalTitles: {
        add: "添加成就",
        delete: "删除",
        update: "修改成就信息",
        info: "成就详情",
      },
      attList: {
        achID: { name: "世界标识", type: "number" },
        name: { name: "世界名字", type: "text" },
        description: { name: "世界描述", type: "text" },
      },
      list: [],
      searchlist: [],
    };
  },
  methods: {
    GetAllItem() {
      console.log("请求ing");
      this.axios
        .get("http://localhost:8848/achievement/findAll")
        .then((response) => (this.list = response.data.extended.list))
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },
    // 添加请求
    addItemRequest(unit) {
      // 发送请求
      console.log(unit);
    },

    // 修改请求
    updateItemRequest(unit) {
      // 发送请求
      console.log(unit);
    },

    // 删除请求
    deleteItemRequest(unit) {
      // 发送请求
      console.log(unit);
    },
    // 查询请求
    searchItemsRequest(unit) {
      // 发送请求
      console.log(unit);
    },
  },
  created() {
    this.GetAllItem();
  },
};
</script>

<style lang="scss" scoped>
</style>