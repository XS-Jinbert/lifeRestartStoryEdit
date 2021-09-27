<template>
  <panel :tableName="tableName" @AddItem="OpenAdd">
    <template v-slot:datatable>
      <datatable
        :list="list"
        :tableTitles="tableTitles"
        @DeleteItem="OpenDelete"
        @UpdateItem="OpenUpdate"
        @ItemInfo="OpenInfo"
      />
    </template>
    <template v-slot:searchtable>
      <searchtable
        :tableTitles="tableTitles"
        :searchlist="searchlist"
        :attList="attList"
        @DeleteItem="OpenDelete"
        @UpdateItem="OpenUpdate"
        @ItemInfo="OpenInfo"
        @SearchItems="searchItemsRequest"
      />
    </template>
  </panel>

  <addmodal
    :attList="attList"
    :modalID="modalIds.add"
    :modalTitle="modalTitles.add"
    @addItemRequest="addItemRequest"
  />

  <updatemodal
    :attList="attList"
    :modalID="modalIds.update"
    :modalTitle="modalTitles.update"
    @updateItemRequest="updateItemRequest"
  />

  <infomodal
    :attList="attList"
    :modalID="modalIds.info"
    :modalTitle="modalTitles.info"
  />

  <deletemodal
    :modalID="modalIds.delete"
    @deleteItemRequest="deleteItemRequest"
  />
</template>

<script>
import panel from "./basepanel.vue";
import deletePanel from "../modal/deletePanel.vue";
import addpanel from "../modal/addPanel.vue";
import updatepanel from "../modal/updatePanel.vue";
import infopanel from "../modal/infoPanel.vue";
import datatable from "../basetable/basedatatbale.vue";
import searchtable from "../basesearch/searchpanel.vue";
export default {
  components: {
    panel: panel,
    datatable: datatable,
    searchtable: searchtable,
    deletemodal: deletePanel,
    addmodal: addpanel,
    updatemodal: updatepanel,
    infomodal: infopanel,
  },
  props: [
    "tableName",
    "tableTitles",
    "modalTitles",
    "attList",
    "list",
    "searchlist",
  ],
  emits: [
    "addItemRequest",
    "updateItemRequest",
    "deleteItemRequest",
    "searchItemsRequest",
  ],
  data() {
    return {
      modalIds: {
        add: "AddModal",
        delete: "DeleteModal",
        update: "UpdateModal",
        info: "InfoModal",
      },
    };
  },
  methods: {
    // 打开删除模态框
    OpenDelete(unit) {
      var modalID = "#" + this.modalIds.delete;
      var id = null;
      for (var key in unit) {
        id = unit[key];
        break;
      }
      $(modalID + " #ID").attr("name", id);
      $(modalID).modal("show");
    },

    // 打开修改模态框
    OpenUpdate(unit) {
      var modalID = "#" + this.modalIds.update;
      for (var i in unit) {
        var jqueryText = modalID + " input[name=" + i + "]";
        $(jqueryText).val(unit[i]);
      }
      $(modalID).modal("show");
    },

    // 打开详情模态框
    OpenInfo(unit) {
      var modalID = "#" + this.modalIds.info;
      for (var i in unit) {
        var jqueryText = modalID + " input[name=" + i + "]";
        $(jqueryText).val(unit[i]);
      }
      $(modalID).modal("show");
    },

    // 打开添加模态框
    OpenAdd() {
      var modalID = "#" + this.modalIds.add;
      $(modalID).modal("show");
    },

    // 添加请求
    addItemRequest(unit) {
      // 向上发送请求
      this.$emit("addItemRequest", unit);
      var modalID = "#" + this.modalIds.add;
      $(modalID).modal("hide");
    },

    // 修改请求
    updateItemRequest(unit) {
      // 向上发送请求
      this.$emit("updateItemRequest", unit);
      var modalID = "#" + this.modalIds.update;
      $(modalID).modal("hide");
    },

    // 删除请求
    deleteItemRequest(unit) {
      let data = new FormData();
      for (var i in this.attList) {
        data.append(i, parseInt(unit));
        break;
      }
      console.log(data.get("worldID"));
      // 向上发送请求
      this.$emit("deleteItemRequest", data);
      var modalID = "#" + this.modalIds.delete;
      $(modalID).modal("hide");
    },

    // 查找请求
    searchItemsRequest(unit) {
      this.$emit("searchItemsRequest", unit);
    },
  },
};
</script>