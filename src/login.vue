<template>
  <p>login</p>
  <button @click="toHome">toHome</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      router: useRouter(),
    };
  },
  methods: {
    toHome() {
      this.router.push({ name: "home" });
    },
  },
};
</script>