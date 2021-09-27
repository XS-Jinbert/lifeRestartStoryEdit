<template>
  <lifetitle />
  <div class="container-fluid">
    <div class="row">
      <!-- 编辑菜单 -->

      <labellist @changePanel="changerPanel" :labels="labels" :show="show" />
      <!-- 编辑数据 -->
      <keep-alive>
        <component :is="show"> </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import title from "./components/title/title.vue";
import labellist from "./components/labellist/labellist.vue";
import worldpanel from "./components/datapanel/worldpanel.vue";
import achievementpanel from "./components/datapanel/achievementpanel.vue";

export default {
  components: {
    lifetitle: title,
    labellist: labellist,
    worldpanel: worldpanel,
    achievementpanel: achievementpanel,
  },
  data() {
    return {
      labels: [
        {
          titleName: "基础信息编辑",
          titleID: "basedataTitle",
          lablePanelID: "basedatalabelPanel",
          lableItems: {
            worldpanel: "世界编辑",
            achievementpanel: "成就编辑",
          },
        },
        {
          titleName: "人生事件编辑",
          titleID: "eventTitle",
          lablePanelID: "eventlabelPanel",
          lableItems: {
            eventPanel: "事件编辑",
            eventbranchPanel: "事件分支编辑",
            eventcludePanel: "事件条件编辑",
            eventeffectPanel: "事件效果编辑",
          },
        },
        {
          titleName: "人生选择编辑",
          titleID: "chooseTitle",
          lablePanelID: "chooselabelPanel",
          lableItems: {
            choosePanel: "选择编辑",
            chooseeffectPanel: "选择效果编辑",
          },
        },
        {
          titleName: "人生特点编辑",
          titleID: "charTitle",
          lablePanelID: "charlabelPanel",
          lableItems: {
            charPanel: "人物特点编辑",
          },
        },
        {
          titleName: "执行效果编辑",
          titleID: "effectTitle",
          lablePanelID: "effectlabelPanel",
          lableItems: {
            effectPanel: "执行效果编辑",
          },
        },
        {
          titleName: "年龄事件配置编辑",
          titleID: "ageConfigTitle",
          lablePanelID: "ageConfiglabelPanel",
          lableItems: {
            ageConfigPanel: "随机事件配置",
          },
        },
      ],
      show: "worldpanel",
    };
  },
  methods: {
    changerPanel(panelName) {
      this.show = panelName;
    },
  },
};
</script>

