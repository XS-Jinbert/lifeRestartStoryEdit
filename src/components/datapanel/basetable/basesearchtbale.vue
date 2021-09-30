<template>
  <table class="table table-bordered table-hover table-striped container-fluid">
    <tbody style="border: 0px">
      <tr>
        <td colspan="4">条件查询</td>
      </tr>
      <template v-for="(temp, index) in getList()" :key="temp + index">
        <tr>
          <template v-for="(item, key, index) in temp" :key="index + key">
            <td>
              <div class="input-group">
              <span class="input-group-addon">{{ item.name }}</span>
                <input
                  :type="item.type"
                  :name="key"
                  :id="key + 10"
                  class="form-control"
                  :placeholder="key"
                  min="0"
                />
            </div>
            </td>
          </template>
        </tr>
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
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getList() {
      let n = 0;
      let x = 4;
      for (var i in this.attList) {
        var flag = Boolean(this.list[parseInt(n / x)]);
        if (!flag) this.list[parseInt(n / x)] = {};
        this.list[parseInt(n / x)][i] = this.attList[i];
        n++;
      }
      return this.list;
    },
    Search() {
      let data = new FormData();
      for (var i in this.attList) {
        var attname = "#" + i + "10";
        var value = $(attname).val();
        console.log(attname + ": " + value)
        if (this.attList[i].type == "number") value = parseInt(value);
        var flag = Boolean(value);
        if (flag) data.append(i, value);
      }
      this.$emit("SearchItems", data);
    },
  },
};
</script>