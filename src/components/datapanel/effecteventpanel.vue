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
      tableName: "人生事件：事件效果编辑",
      tableTitles: ["标识ID", "事件ID", "效果ID"],
      modalTitles: {
        add: "添加事件效果",
        delete: "删除",
        update: "修改事件效果信息",
        info: "事件效果详情",
      },
      attList: {
        eventEffectID: {
          name: "标识ID",
          type: "number",
          add: "ignore",
          update: "ignore",
        },
        eventID: {
          name: "事件ID",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/event/",
        },
        effectID: {
          name: "效果ID",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/effect/",
        },
      },
      url: "http://localhost:8848/eventEffect/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>