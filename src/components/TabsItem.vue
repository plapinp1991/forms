<template>
  <div
    :class="{
      'app-tabs__item--active': isActive
    }"
    class="app-tabs__item"
    @click="$emit('change', tab)"
  >
    {{ tab.title }}
  </div>
</template>
<script>

export default {
  name: 'TabsItem',
  props: {
    tab: {
      type: Object,
      default: () => ({})
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
  .app-tabs__item {
    padding: 0 50px 15px;
    font-size: 14px;
    font-weight: 600;
    color: #05a205;
    border-bottom: 1px solid #97dc6b;

    &:hover {
      cursor: pointer;
    }

    &--active {
      color: #000;
      border-bottom: 3px solid #97dc6b;
    }
  }
</style>
