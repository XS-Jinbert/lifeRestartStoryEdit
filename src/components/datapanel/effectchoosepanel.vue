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
      tableName: "人生选择：选择效果编辑",
      tableTitles: ["标识ID", "选择ID", "效果ID"],
      modalTitles: {
        add: "添加选择效果",
        delete: "删除",
        update: "修改选择效果信息",
        info: "选择效果详情",
      },
      attList: {
        eventEffectID: {
          name: "标识ID",
          type: "number",
          add: "ignore",
          update: "ignore",
        },
        chooseID: {
          name: "选择ID",
          type: "number",
          kind: "down",
          url: "/choose/",
        },
        effectID: {
          name: "效果ID",
          type: "number",
          kind: "down",
          url: "/effect/",
        },
      },
      url:"/chooseEffect/",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>