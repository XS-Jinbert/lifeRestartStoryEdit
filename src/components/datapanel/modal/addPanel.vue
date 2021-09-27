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
          <h4 class="modal-title">{{ modalTitle }}</h4>
        </div>
        <div class="modal-body">
          <form>
            <template v-for="(item, key, index) in attList" :key="index + key">
              <div v-if="index != 0" class="input-group">
                <span class="input-group-addon">{{ item.name }}</span>
                <input
                  :type="item.type"
                  :name="key"
                  :id="key+0"
                  class="form-control"
                  :placeholder="key"
                  min="0"
                  value=""
                />
              </div>
            </template>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-success" @click="AddItem">
            添加
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
  props: ["attList", "modalID", "modalTitle"],
  emits: ["addItemRequest"],
  methods: {
    AddItem() {
      let data = new FormData();
      var n = 0;
      for (var i in this.attList) {
        var attname = "#" + this.modalID + " #" + i + "0";
        var value = $(attname).val();
        if (!Boolean(value) && n != 0) {
          alert("请输入" + i + "!");
          return;
        }
        if (this.attList[i].type == "number") value = parseInt(value);
        if (n == 0) data.append(i, 0);
        else data.append(i, value);
        n++;
      }
      this.$emit("addItemRequest", data);
    },
  },
};
</script>