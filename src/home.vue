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
import eventpanel from "./components/datapanel/lifeeventPanel.vue";
import branchpanel from "./components/datapanel/editbranch.vue";
import eventbranchpanel from "./components/datapanel/branchpanel.vue";
import eventcludepanel from "./components/datapanel/cludepanel.vue";
import eventeffectpanel from "./components/datapanel/effecteventpanel.vue";
import choosepanel from "./components/datapanel/choosepanel.vue";
import chooseeffectpanel from "./components/datapanel/effectchoosepanel.vue";
import charpanel from "./components/datapanel/charpanel.vue";
import effectpanel from "./components/datapanel/baseeffectpanel.vue";
import cludepanel from "./components/datapanel/editcludepanel.vue";
import ageconfigpanel from "./components/datapanel/ageconfigpanel.vue";

export default {
  components: {
    lifetitle: title,
    labellist: labellist,
    worldpanel: worldpanel,
    achievementpanel: achievementpanel,
    eventpanel:eventpanel,
    branchpanel:branchpanel,
    eventbranchpanel:eventbranchpanel,
    eventcludepanel:eventcludepanel,
    eventeffectpanel:eventeffectpanel,
    choosepanel:choosepanel,
    chooseeffectpanel:chooseeffectpanel,
    charpanel:charpanel,
    effectpanel:effectpanel,
    cludepanel:cludepanel,
    ageconfigpanel:ageconfigpanel,
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
            eventpanel: "事件编辑",
            eventbranchpanel: "事件分支编辑",
            eventcludepanel: "事件条件编辑",
            eventeffectpanel: "事件效果编辑",
          },
        },
        {
          titleName: "人生选择编辑",
          titleID: "chooseTitle",
          lablePanelID: "chooselabelPanel",
          lableItems: {
            choosepanel: "选择编辑",
            chooseeffectpanel: "选择效果编辑",
          },
        },
        {
          titleName: "人物特点编辑",
          titleID: "charTitle",
          lablePanelID: "charlabelPanel",
          lableItems: {
            charpanel: "人物特点编辑",
          },
        },
        {
          titleName: "判定相关编辑",
          titleID: "effectTitle",
          lablePanelID: "effectlabelPanel",
          lableItems: {
            branchpanel: "分支编辑",
            effectpanel: "执行效果编辑",
            cludepanel: "判定条件编辑",
          },
        },
        {
          titleName: "年龄事件配置编辑",
          titleID: "ageConfigTitle",
          lablePanelID: "ageConfiglabelPanel",
          lableItems: {
            ageconfigpanel: "随机事件配置",
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

