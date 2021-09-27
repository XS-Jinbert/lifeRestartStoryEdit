<template>
  <div class="col-lg-2">
    <div
      class="panel-group"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      <template v-for="(item, index) in labels" :key="index + item">
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" :id="item.titleID">
            <h4 class="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                :href="'#'+item.lablePanelID"
                aria-expanded="false"
                :aria-controls="item.lablePanelID"
                class="collapsed"
              >
                {{item.titleName}}
              </a>
            </h4>
          </div>
          <div
            :id="item.lablePanelID"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-expanded="false"
            :aria-labelledby="item.titleID"
          >
            <div class="panel-body">
              <ul class="list-group">
                <template v-for="(label, key, index) in item.lableItems" :key="index + label">
                  <labelItem :label="label" :panelName="key" @changePanel="changePanel"/>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import labelItem from "./labelItem.vue";
export default {
  components: {
    labelItem: labelItem,
  },
  emits: ["changePanel"],
  props: ["labels"],
  methods: {
    changePanel(panelName) {
      this.$emit('changePanel',panelName);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>