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
      tableName: "基础信息：成就编辑",
      tableTitles: ["成就ID", "成就名字", "成就描述"],
      modalTitles: {
        add: "添加成就",
        delete: "删除",
        update: "修改成就信息",
        info: "成就详情",
      },
      attList: {
        achID: { name: "世界标识", type: "number", add: "ignore", update: "ignore" },
        name: { name: "世界名字", type: "text" },
        description: { name: "世界描述", type: "text" },
      },
      url: "/achievement/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>