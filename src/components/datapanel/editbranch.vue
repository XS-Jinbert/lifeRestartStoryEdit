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
      tableName: "人生事件：分支编辑",
      tableTitles: ["分支ID", "事件ID", "选择ID"],
      modalTitles: {
        add: "添加分支",
        delete: "删除",
        update: "修改分支信息",
        info: "分支详情",
      },
      attList: {
        branchID: { name: "分支ID", type: "number" },
        eventID: {
          name: "事件ID",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/event/",
        },
        chooseID: {
          name: "选择ID",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/choose/",
        },
      },
      url: "http://localhost:8848/eventBranch/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>