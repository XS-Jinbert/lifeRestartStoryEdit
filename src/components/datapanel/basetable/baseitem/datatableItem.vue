<template>
  <tr>
    <template v-for="(item, index) in unit" :key="index + item">
      <th>{{ item }}</th>
    </template>
    <th>
      <a class="btn btn-danger btn-sm" @click="Delete">删除</a>
      <a class="btn btn-warning btn-sm" @click="Update">修改</a>
      <a class="btn btn-info btn-sm" @click="Info">详情</a>
    </th>
  </tr>
</template>

<script>
export default {
  props: ["unit"],
  emits:["DeleteItem","UpdateItem","ItemInfo",],
  data() {
    return {
      list: [],
    };
  },
  methods:{
    Delete(){
      this.$emit('DeleteItem', this.unit);
    },
    Update(){
      this.$emit('UpdateItem', this.unit);
    },
    Info(){
      this.$emit('ItemInfo', this.unit);
    },
  },
};
</script>