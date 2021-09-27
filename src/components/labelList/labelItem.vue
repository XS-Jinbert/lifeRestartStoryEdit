<template>
  <li v-if="show == panelName" class="list-group-item btn active" @click="changePanel">
    {{ label }}
  </li>
  <li v-else class="list-group-item btn" @click="changePanel">
    {{ label }}
  </li>
</template>

<script>
export default {
  emits: ["changePanel"],
  props: ["label","panelName", "show"],
  methods: {
    changePanel() {
      this.$emit("changePanel", this.panelName);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>