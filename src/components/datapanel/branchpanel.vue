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
      tableName: "判定相关：分支判定编辑",
      tableTitles: ["分支ID", "判定ID"],
      modalTitles: {
        add: "添加分支判定",
        delete: "删除",
        update: "修改分支判定信息",
        info: "分支判定详情",
      },
      attList: {
        branchID: {
          name: "分支ID",
          type: "number",
          update: "ignore",
          kind: "down",
          url: "/eventBranch/",
        },
        cludeID: {
          name: "判定ID",
          type: "number",
          kind: "down",
          url: "/clude/",
        },
      },
      url: "/branch/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>