<template>
  <div class="app-age-respondents-block">
    <div
      v-for="(field, ndx) in ageItems"
      :key="field.id"
      class="app-age-respondents-block__row"
    >
      <div
        class="app-age-respondents-block__row-info"
      >
        <div
          v-if="ndx > 0"
          class="app-age-respondents-block__separator"
        >
          <IfSeparator
            title="ИЛИ"
          />
        </div>
        <div class="app-age-respondents-block__title">
          {{ `${fieldRowTitle} ${ndx + 1}` }}
        </div>
      </div>
      <div class="app-age-respondents-block__field">
        <Input
          :field="field"
          field-key="valueFrom"
          placeholder="от"
        />
      </div>
      <div class="app-age-respondents-block__field">
        <Input
          :field="field"
          field-key="valueTo"
          placeholder="до"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Input from '@/components/Input'
import IfSeparator from '@/components/IfSeparator'
import Radio from '@/Radio'

export default {
  name: 'AgeRespondentsBlock',
  components: {
    Input,
    IfSeparator
  },
  props: {
    index: {
      type: Number,
      default: ''
    }
  },
  data() {
    return {
      fieldRowTitle: 'Диапазон',
      ageItems: [{
        id: Math.random() * 100,
        valueFrom: '',
        valueTo: ''
      }]
    }
  },
  watch: {
    ageItems: {
      deep: true,
      handler(newV) {
        console.log(newV)
        // $emit to parent data/params
      }
    }
  },
  created() {
    Radio.$on(`add:newAgeBlock${this.index}Row`, this.addNewPrepare)
  },
  methods: {
    addNewPrepare() {
      this.ageItems.push({
        id: Math.random() * 100,
        valueFrom: '',
        valueTo: ''
      })
    }
  }
}
</script>
<style lang="scss">
  .app-age-respondents-block__row {
    display: flex;
    align-items: center;
  }

  .app-age-respondents-block__row-info {
    min-width: 150px;
    display: flex;
    align-items: center;
  }

  .app-age-respondents-block__separator {
    margin-right: 10px;
  }

  .app-age-respondents-block__title {
    font-size: 14px;
  }

  .app-age-respondents-block__field {
    margin: 10px;
  }
</style>
