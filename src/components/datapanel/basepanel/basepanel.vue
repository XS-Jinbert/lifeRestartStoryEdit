<template>
  <div class="col-lg-10">
    <div class="panel panel-default">
      <div class="panel-heading" style="padding: 0px">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <h4
            class="collapsed"
            style="
              margin: 0px;
              height: 40px;
              padding: 10px;
              background-color: white;
            "
          >
            {{ tableName }}
          </h4>
          <li role="presentation" class="active">
            <a href="#Table" aria-controls="Table" role="tab" data-toggle="tab"
              >列表</a
            >
          </li>
          <li role="presentation">
            <a href="#quiry" aria-controls="quiry" role="tab" data-toggle="tab"
              >查询</a
            >
          </li>
          <li role="presentation" @click="Add">
            <a class="btn"> 添加 </a>
          </li>
        </ul>
      </div>
      <div class="panel-collapse" role="tabpanel">
        <!-- 标签页 -->
        <div>
          <div class="tab-content">
            <!-- 数据页 -->
            <div role="tabpanel" class="tab-pane active" id="Table">
              <slot name="datatable"> </slot>
            </div>
            <!-- 查询页 -->
            <div role="tabpanel" class="tab-pane" id="quiry">
              <slot name="searchtable"> </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

    
<script>
export default {
  props: ["tableName"],
  emits: ["AddItem"],
  methods: {
    Add() {
      this.$emit("AddItem");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>