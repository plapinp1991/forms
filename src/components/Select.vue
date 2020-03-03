<template>
  <div class="app-select">
    <select
      v-model="selected"
      @change="$emit('select', selected)"
      class="app-select"
      >
      <option
        disabled
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
      >
        {{ item.title }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'Select',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      selected: ''
    }
  }
}
</script>
<style lang="scss">
  .app-select select {
    display: block;
    width: 100%;
    outline: none;
    padding: 9px 15px;
    background: #fff;
    border: 1px solid #e0dada;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #000;
}
</style>
