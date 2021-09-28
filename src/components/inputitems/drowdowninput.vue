<template>
  <div class="input-group">
    <input type="text" class="form-control" />
    <div class="input-group-btn">
      <button
        type="button"
        class="btn btn-default dropdown-toggle"
        data-toggle="dropdown"
        tabindex="-1"
      >
        <span class="caret"></span>
        <span class="sr-only">切换下拉菜单</span>
      </button>
      <ul class="dropdown-menu pull-right">
        <li>
          <a href="#">功能</a>
        </li>
        <li>
          <a href="#">另一个功能</a>
        </li>
        <li>
          <a href="#">其他</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#">分离的链接</a>
        </li>
      </ul>
    </div>
    <!-- /btn-group -->
  </div>
  <!-- /input-group -->
</template>

<script>
export default {};
</script>