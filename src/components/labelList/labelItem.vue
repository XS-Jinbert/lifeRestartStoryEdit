<template>
  <li class="list-group-item">
    <a href="#" @click="changePanel">{{ label }}</a>
  </li>
</template>

<script>
export default {
  emits: ["changePanel"],
  props: ["label","panelName"],
  methods: {
    changePanel() {
      this.$emit("changePanel", this.panelName);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>