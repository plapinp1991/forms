<template>
  <div
    :style="{
      'background-color': layoutColor
    }"
    class="app-if-respondents-block"
  >
    <div class="app-if-respondents-block__prepare-field">
      <div class="app-if-respondents-block__prepare-field__label">
        {{ blockTitle }}
      </div>
      <Select
        placeholder="Выберите тип условия"
        :items="formTypes"
        @select="onSelectFormType"
      />
    </div>

    <div class="app-if-respondents-block__form">
      <AgeRespondentsBlock
        v-if="formType === 1"
        :index="index"
      />
    </div>

    <div class="app-if-respondents-block__controls">
      <Button
        :title="buttonAddTitle"
        type="add"
        @click.native="onAddNewRow"
      />
      <Button
        :title="buttonRemoveTitle"
        type="remove"
        @click.native="remove"
      />
    </div>
    <div class="app-if-respondents-block__separator">
      <IfSeparator
        v-if="showSeparator"
        :color="layoutColor"
      />
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button'
import Select from '@/components/Select'
import IfSeparator from '@/components/IfSeparator'
import AgeRespondentsBlock from '@/blocks/AgeRespondentsBlock'
import Radio from '@/Radio'

export default {
  name: 'RespondentsBlock',
  components: {
    Button,
    Select,
    IfSeparator,
    AgeRespondentsBlock
  },
  props: {
    buttonRemoveTitle: {
      type: String,
      default: 'Удалить условие'
    },
    title: {
      type: String,
      default: ''
    },
    showSeparator: {
      type: Boolean,
      default: true
    },
    index: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      layoutColor: this.generateBgColor(),
      formType: null,
      formTypes: [
        { id: 1, title: 'Возраст респондента' },
        { id: 2, title: 'Тип карты лояльности' },
        { id: 3, title: 'Статус карты лояльности' },
      ],
      addButtonTypes: {
        1: '+ Добавить диапазон',
        2: '+ Добавить тип',
        3: '+ Добавить статус'
      }
    }
  },
  computed: {
    blockTitle() {
      return `${this.title} ${this.index + 1}`
    },
    buttonAddTitle() {
      if (this.formType) {
        return this.addButtonTypes[this.formType]
      }
      return 'Добавить...'
    }
  },
  methods: {
    generateBgColor() {
      const getColor = () => Math.round(Math.random() * 20) + 235

      return `rgb(${getColor()}, ${getColor()}, ${getColor()})`
    },
    remove() {
      this.$emit('remove', this.index)
    },
    onSelectFormType(formType) {
      this.formType = formType
    },
    onAddNewRow() {
      if (this.formType === 1) {
        Radio.$emit(`add:newAgeBlock${this.index}Row`)
      }
    }
  }
}
</script>
<style lang="scss">
  .app-if-respondents-block {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 30px;
    position: relative;
  }

  .app-if-respondents-block__controls {
    width: 300px;
    display: flex;
    justify-content: space-around;
    padding: 50px;
  }

  .app-if-respondents-block__separator {
    position: absolute;
    bottom: -20px;
    left: 20px;
    z-index: 10;
  }

  .app-if-respondents-block__prepare-field {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-if-respondents-block__prepare-field__label {
    font-weight: 600;
    font-size: 14px;
    color: #000;
  }
</style>
