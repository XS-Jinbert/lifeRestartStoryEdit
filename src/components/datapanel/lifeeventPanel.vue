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
      tableName: "人生事件：事件编辑",
      tableTitles: [
        "事件id",
        "事件名字",
        "事件描述",
        "事件文本",
        "事件价值",
        "事件级别",
      ],
      modalTitles: {
        add: "添加事件",
        delete: "删除",
        update: "修改事件信息",
        info: "事件详情",
      },
      attList: {
        eventID: { name: "事件标识", type: "number", add: "ignore", update: "ignore" },
        name: { name: "事件名字", type: "text" },
        description: { name: "事件描述", type: "text" },
        happen: { name: "事件文本", type: "text" },
        lifePoint: { name: "事件价值", type: "number" },
        noRandom: {
          name: "事件级别",
          type: "number",
          kind: "down",
          url: "/eventNoRandom/",
        },
      },
      url: "/event/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>