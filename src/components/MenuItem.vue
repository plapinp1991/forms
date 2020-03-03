<template>
  <div
    :class="{
      'app-menu__item--active': isActive
    }"
    class="app-menu__item"
  >
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
  .app-menu__item {
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
    width: 120px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin: 5px;
    overflow: hidden;

    &:hover {
      background: rgb(247, 247, 247);
      cursor: pointer;
    }

    &--active {
      border: 1px solid #97dc6b;
      color: #97dc6b;
    }
  }
</style>
