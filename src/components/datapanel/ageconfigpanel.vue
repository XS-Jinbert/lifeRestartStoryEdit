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
      tableName: "事件配置：随机配置事件",
      tableTitles: ["配置ID", "年龄", "事件ID", "权值"],
      modalTitles: {
        add: "添加随机事件",
        delete: "删除",
        update: "修改随机事件信息",
        info: "随机事件详情",
      },
      attList: {
        configID: {
          name: "标识",
          type: "number",
          add: "ignore",
          update: "ignore",
        },
        age: {
          name: "年龄",
          type: "number",
        },
        eventID: {
          name: "事件",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/event/",
        },
        weight: { name: "权值", type: "number" },
      },
      url: "http://localhost:8848/ageConfig/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>