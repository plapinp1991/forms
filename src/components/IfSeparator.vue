<template>
  <div
    :style="{
      'background-color': color
    }"
    class="app-if-separator"
  >
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'IfSeparator',
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String,
      default: 'И'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
  .app-if-separator {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    color: #000;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
  }
</style>
