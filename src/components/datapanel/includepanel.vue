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
      tableName: "人生事件：事件开启条件编辑",
      tableTitles: ["条件名称", "事件ID", "条件ID"],
      modalTitles: {
        add: "添加条件",
        delete: "删除",
        update: "修改条件信息",
        info: "条件详情",
      },
      attList: {
        name: { name: "条件名称", type: "text", update: "ignore" },
        eventID: {
          name: "事件标识",
          type: "number",
          kind: "down",
          url: "/event/",
        },
        cludeID: {
          name: "条件标识",
          type: "number",
          kind: "down",
          url: "/clude/",
        },
      },
      url: "/eventInclude/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>