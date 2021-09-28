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
import { useRouter } from "vue-router";

import panel from "./basepanel.vue";
import deletePanel from "../modal/normal/deletePanel.vue";
import addpanel from "../modal/down/addPanel.vue";
import updatepanel from "../modal/normal/updatePanel.vue";
import infopanel from "../modal/normal/infoPanel.vue";
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
  props: ["tableName", "tableTitles", "modalTitles", "attList", "url"],
  emits: [
    "addItemRequest",
    "updateItemRequest",
    "deleteItemRequest",
    "searchItemsRequest",
  ],
  data() {
    return {
      router: useRouter(),
      modalIds: {
        add: "AddModal",
        delete: "DeleteModal",
        update: "UpdateModal",
        info: "InfoModal",
      },
      list: [],
      searchlist: [],
      searchunit: null,
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

    GetAllItem() {
      console.log("请求ing");
      if (this.axios.defaults.headers.common["token"] == null) {
        this.router.push({ name: "login" });
      } else {
        this.axios
          .get(this.url + "findAll")
          .then((response) => {
            if (this.result(response)) {
              this.list = response.data.extended.list;
            }
          })
          .catch(function (error) {
            // 请求失败处理
            console.log("请求失败");
            console.log(error);
          });
      }
    },

    // 更新查询出来的队列
    GetSearchItems() {
      if (this.searchunit != null) {
        this.searchItemsRequest(this.searchunit);
      }
    },

    // 添加请求
    addItemRequest(unit) {
      // 发送请求
      this.axios
        .post(this.url + "add", unit)
        .then((response) => {
          if (this.result(response)) {
            this.GetAllItem();
            this.GetSearchItems();
            this.CloseModal(this.modalIds.add)
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 修改请求
    updateItemRequest(unit) {
      // 发送请求
      this.axios
        .post(this.url + "update", unit)
        .then((response) => {
          if (this.result(response)) {
            this.GetAllItem();
            this.GetSearchItems();
            this.CloseModal(this.modalIds.update)
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 删除请求
    deleteItemRequest(unit) {
      // 发送请求
      this.axios
        .delete(this.url + "delete", { data: unit })
        .then((response) => {
          if (this.result(response)) {
            this.GetAllItem();
            this.GetSearchItems();
            this.CloseModal(this.modalIds.delete)
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 查询请求
    searchItemsRequest(unit) {
      // 发送请求
      this.searchunit = unit;
      this.axios
        .post(this.url + "select", unit)
        .then((response) => {
          if (this.result(response)) {
            this.searchlist = response.data.extended.list;
            this.GetAllItem();
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败");
          console.log(error);
        });
    },

    // 处理返回信息
    result(response) {
      if (response.data.code == 200) {
        return true;
      } else {
        alert(response.data.message);
        return false;
      }
    },

    // 关闭模态框
    CloseModal(modalID) {
      $("#" + modalID).modal("hide");
    },
  },
  created() {
    this.GetAllItem();
  },
};
</script>