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
      tableName: "判定相关：判定条件编辑",
      tableTitles: ["条件id", "判定类型", "判定属性", "判定的值"],
      modalTitles: {
        add: "添加判定条件",
        delete: "删除",
        update: "修改判定条件信息",
        info: "判定条件详情",
      },
      attList: {
        cludeID: {
          name: "条件标识",
          type: "number",
          add: "ignore",
          update: "ignore",
        },
        judgeID: {
          name: "判定类型",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/judgeKind/",
        },
        atName: { name: "判定属性", type: "text" },
        value: { name: "判定的值", type: "number" },
      },
      url: "http://localhost:8848/clude/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>