<template>
  <panel
    :tableName="tableName"
    :tableTitles="tableTitles"
    :attList="attList"
    :modalTitles="modalTitles"
    :url="url"
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
        chooseID: { name: "选择标识", type: "number", add: "ignore" },
        name: { name: "选择名字", type: "text" },
        description: { name: "选择描述", type: "text" },
      },
      url:"http://localhost:8848/choose/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>