<template>
  <div :id="modalID" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">警告</h4>
        </div>
        <div class="modal-body">
          <div>
            <h3 class="text-danger">删除该数据可能造成不可挽救的后果！</h3>
            <h3>你确定要删除吗？</h3>
          </div>
        </div>
        <div class="modal-footer">
          <button
            id="IDName"
            name=""
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
          >
            取消
          </button>
          <button
            id="ID"
            name=""
            type="button"
            class="btn btn-danger"
            @click="DeleteItem"
          >
            删除
          </button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
export default {
  props: ["modalID"],
  methods: {
    DeleteItem() {
      let data = new FormData();
      data.append(
        $("#" + this.modalID + " #IDName").attr("name"),
        parseInt($("#" + this.modalID + " #ID").attr("name"))
      );
      console.log($("#" + this.modalID + " #IDName").attr("name"));
      console.log(data.get($("#" + this.modalID + " #IDName").attr("name")));
      this.$emit("deleteItemRequest", data);
    },
  },
};
</script>