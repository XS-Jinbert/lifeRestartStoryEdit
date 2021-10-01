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
import datapanel from "./basepanel/downdatapanel.vue";
export default {
  components: {
    panel: datapanel,
  },
  data() {
    return {
      tableName: "人物特点：特点编辑",
      tableTitles: ["特点ID", "特点名字", "特点描述", "特点价值", "特点级别"],
      modalTitles: {
        add: "添加特点",
        delete: "删除",
        update: "修改特点信息",
        info: "特点详情",
      },
      attList: {
        charID: { name: "特点标识", type: "number", add: "ignore" },
        name: { name: "特点名字", type: "text" },
        description: { name: "特点描述", type: "text" },
        lifePoint: { name: "特点价值", type: "number" },
        grade: {
          name: "特点级别",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/charGrade/",
        },
      },
      url: "http://localhost:8848/char/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>