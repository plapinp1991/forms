<template>
  <button
    :class="{
      'app-button--type_add': type === 'add',
      'app-button--type_remove': type === 'remove'
    }"
    class="app-button"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .app-button {
    border-radius: 5px;
    outline: none;
    border: none;
    color: #000;
    border: 1px solid #000;
    padding: 9px 15px;
    font-weight: 600;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }

    &--type_add {
      border: 1px solid #97dc6b;
      color: #97dc6b;
    }

    &--type_remove {
      border: 1px solid #e8b0b0;
      color: #e8b0b0;
    }
  }
</style>
