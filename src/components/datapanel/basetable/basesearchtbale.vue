<template>
  <table class="table table-bordered table-hover table-striped container-fluid">
    <tbody style="border: 0px">
      <tr>
        <td colspan="4">条件查询</td>
      </tr>
      <template v-for="(item, key, index) in attList" :key="index + key">
        <td>
          <div class="input-group">
            <span class="input-group-addon">{{ item.name }}</span>
            <input
              :type="item.type"
              :name="key"
              :id="key + 10"
              class="form-control"
              :placeholder="key"
            />
          </div>
        </td>
      </template>
      <tr>
        <td colspan="4">
          <a class="btn btn-info btn-sm" @click="Search">查询</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  emits: ["SearchItems"],
  props: ["attList"],
  methods: {
    Search() {
      let data = new FormData();
      for (var i in this.attList) {
        var attname = "#" + i + "10";
        var value = $(attname).val();
        if (this.attList[i].type == "number") value = parseInt(value);
        var flag = Boolean(value);
        if (flag) data.append(i, value);
      }
      this.$emit("SearchItems", data);
    },
  },
};
</script>