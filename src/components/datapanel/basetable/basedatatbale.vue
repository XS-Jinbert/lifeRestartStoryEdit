<template>
  <!-- 数据表 -->
  <table class="table table-bordered table-hover table-striped container-fluid">
    <tbody style="border: 0px">
      <tr>
        <th v-for="(title, index) in tableTitles" :key="index + title">
          {{ title }}
        </th>
        <th>操作</th>
      </tr>
      <tr v-if="list.length == 0">
        <td :colspan="tableTitles.length + 1">没有数据</td>
      </tr>
      <template v-for="(item, index) in list" :key="index + item">
        <data-unit
          :unit="item"
          @DeleteItem="Delete"
          @UpdateItem="Update"
          @ItemInfo="Info"
        />
      </template>
    </tbody>
  </table>
  <!-- 分页 -->
  <div v-if="list.length != 0">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li @click="SetCurrentPage(0)">
          <a>首页 [1]</a>
        </li>
        <li @click="PrevPage()">
          <a>&laquo;</a>
        </li>
        <template v-for="(value, index) in showpage" :key="index + value">
          <li
            v-if="value == currentpage + 1"
            class="active"
            @click="SetCurrentPage(value - 1)"
          >
            <a> {{ value }} </a>
          </li>
          <li v-else @click="SetCurrentPage(value - 1)">
            <a> {{ value }} </a>
          </li>
        </template>
        <li @click="NextPage()">
          <a>&raquo;</a>
        </li>
        <li @click="SetCurrentPage(pageNum - 1)">
          <a>尾页 [{{ pageNum }}]</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import tableitem from "./baseitem/datatableItem.vue";
export default {
  props: ["tableTitles", "list"],
  emits: ["DeleteItem", "UpdateItem", "ItemInfo"],
  components: {
    dataUnit: tableitem,
  },
  data() {
    return {
      datalist: this.list,
      pageNum: 1,
      pageSize: 30,
      currentpage: 0,
      totalPage: [],
      showList: [],
      showsize: 9,
      showpage: [],
    };
  },
  methods: {
    Delete(unit) {
      this.$emit("DeleteItem", unit);
    },
    Update(unit) {
      this.$emit("UpdateItem", unit);
    },
    Info(unit) {
      this.$emit("ItemInfo", unit);
    },
    // 分页
    SlicePage() {
      // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
      this.pageNum = Math.ceil(this.list.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为30， 则第一页是1-30条，即slice(0,30)
        this.totalPage[i] = this.list.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      this.SetShowPage();
      // 获取到数据后显示第一页内容
      this.showList = this.totalPage[this.currentpage];
      console.log("分页完成");
    },
    // 设置分页页码展示
    SetShowPage() {
      if (this.pageNum <= 9 && this.currentpage < 9) {
        for (let i = 0; i < this.pageNum; i++) {
          this.showpage[i] = i + 1;
        }
      } else {
        for (let i = this.currentpage; i < this.currentpage + 9; i++) {
          this.showpage[i] = i + 1;
        }
      }
    },
    // 设置分页页码
    SetCurrentPage(page) {
      this.currentpage = page;
    },
    // 上一页
    PrevPage() {
      this.currentpage -= 1;
      if (this.currentpage < 0) this.currentpage = 0;
    },
    // 下一页
    NextPage() {
      this.currentpage += 1;
      if (this.currentpage >= this.pageNum) this.currentpage = this.pageNum - 1;
    },
  },
  watch: {
    list() {
      this.SlicePage();
    },
    currentpage() {
      this.showList = this.totalPage[this.currentpage];
      if (this.currentpage >= this.showpage[0] + 9) this.SetShowPage();
    },
  },
};
</script>