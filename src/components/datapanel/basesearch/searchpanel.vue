<template>
  <searchtable :attList="attList" @SearchItems="Search" />
  <datatable
    :list="searchlist"
    :tableTitles="tableTitles"
    @DeleteItem="Delete"
    @UpdateItem="Update"
    @ItemInfo="Info"
  />
</template>

<script>
import datatable from "../basetable/basedatatbale.vue";
import searchtable from "../basetable/basesearchtbale.vue";
export default {
  props: ["tableTitles", "searchlist", "attList"],
  emits: ["DeleteItem", "UpdateItem", "ItemInfo", "SearchItems"],
  components: {
    datatable: datatable,
    searchtable: searchtable,
  },
  methods: {
    Delete(unit) {
      console.log(unit);
      this.$emit("DeleteItem", unit);
    },
    Update(unit) {
      this.$emit("UpdateItem", unit);
    },
    Info(unit) {
      this.$emit("ItemInfo", unit);
    },
    Add() {
      this.$emit("AddItem");
    },
    Search(unit) {
      this.$emit("SearchItems", unit);
    },
  },
};
</script>