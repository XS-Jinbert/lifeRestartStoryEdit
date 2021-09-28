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
                  :id="key+1"
                  class="form-control"
                  :placeholder="key"
                  value=""
                  min="0"
                />
              </div>
              <div v-else class="input-group">
                <span class="input-group-addon">{{ item.name }}</span>
                <input
                  :type="item.type"
                  :name="key"
                  :id="key+1"
                  class="form-control"
                  :placeholder="key"
                  value=""
                  disabled
                />
              </div>
            </template>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-warning" @click="UpdateItem">
            修改
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
  emits: ["updateItemRequest"],
  methods: {
    UpdateItem() {
      let data = new FormData();
      for (var i in this.attList) {
        var attname = "#" + this.modalID + " #" + i + "1";
        var value = $(attname).val();
        if (this.attList[i].type == "number") value = parseInt(value);
        data.append(i, value);
      }
      this.$emit("updateItemRequest", data);
    },
  },
};
</script>