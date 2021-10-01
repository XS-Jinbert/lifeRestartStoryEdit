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
      tableName: "基础信息：世界编辑",
      tableTitles: ["世界ID", "世界名字", "世界描述", "世界价值"],
      modalTitles: {
        add: "添加世界",
        delete: "删除",
        update: "修改世界信息",
        info: "世界详情",
      },
      attList: {
        worldID: { name: "世界标识", type: "number", add: "ignore" },
        name: { name: "世界名字", type: "text" },
        description: { name: "世界描述", type: "text" },
        lifePoint: { name: "世界价值", type: "number" },
      },
      url: "http://localhost:8848/world/",
    };
  },
};
</script>