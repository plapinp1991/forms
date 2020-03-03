<template>
  <input
    v-model="value"
    :placeholder="placeholder"
    @input="onInput"
    class="app-input"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    // dynamic
    field: {
      type: Object,
      default: () => ({})
    },
    fieldKey: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onInput(data) {
      this.$emit('input', data.target.value)

      if (this.field && this.fieldKey) {
        this.field[this.fieldKey] = data.target.value
      }
    }
  }
}
</script>

<style lang="scss">
  .app-input {
    border-radius: 5px;
    outline: none;
    border: none;
    color: #ссс;
    border: 1px solid #e0dada;
    padding: 9px 15px;
    font-weight: 600;
  }
</style>
