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
      tableName: "执行效果：效果编辑",
      tableTitles: [
        "执行效果ID",
        "效果名称",
        "执行效果类型ID",
        "执行属性",
        "执行的值",
      ],
      modalTitles: {
        add: "添加执行效果",
        delete: "删除",
        update: "修改执行效果信息",
        info: "执行效果详情",
      },
      attList: {
        effectID: {
          name: "执行标识",
          type: "number",
          add: "ignore",
          update: "ignore",
        },
        name: { name: "效果名称", type: "text" },
        effectKindID: {
          name: "类型标识",
          type: "number",
          kind: "down",
          url: "http://localhost:8848/effectKind/",
        },
        atName: { name: "执行属性", type: "text" },
        value: { name: "执行的值", type: "number" },
      },
      url: "http://localhost:8848/effect/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>