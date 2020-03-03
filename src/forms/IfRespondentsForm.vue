<template>
  <div class="app-if-respondents-form">
    <div
      class="app-if-respondents__add-new"
      @click="addNewBlock"
    >
      Добавить опрос
    </div>
    <IfRespondentsBlock
      v-for="(block, index) in ifItemsBlock"
      :key="block.id"
      :title="block.title"
      :index="index"
      :showSeparator="index < ifItemsBlock.length - 1"
      @remove="onRemoveBlock"
    />
  </div>
</template>
<script>
import IfRespondentsBlock from '@/blocks/IfRespondentsBlock'

export default {
  name: 'IfRespondentsForm',
  components: {
    IfRespondentsBlock
  },
  data() {
    return {
      ifItemsBlock: []
    }
  },
  methods: {
    addNewBlock() {
      this.ifItemsBlock.push({
        id: Math.random() * 100,
        title: 'Условие'
      })
    },
    onRemoveBlock(index) {
      this.ifItemsBlock = this.ifItemsBlock.filter((block, ndx) => ndx !== index)
    }
  }
}
</script>
<style lang="scss">
  .app-if-respondents-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .app-if-respondents__add-new {
    margin: 10px 0;
    cursor: pointer;
    color: #ccc;
    font-weight: 600;
    display: inline-block;
  }
</style>
