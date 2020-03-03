<template>
  <div class="app-tabs">
    <TabsItem
      v-for="(tab, ndx) in items"
      :key="tab.id"
      :tab="tab"
      :is-active="tab.id === activeTabId"
      @change="onChange"
    />
  </div>
</template>
<script>
import TabsItem from '@/components/TabsItem'

export default {
  name: 'Tabs',
  components: {
    TabsItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: this.items[this.items.length - 1]
    }
  },
  computed: {
    activeTabId() {
      return this.activeTab && this.activeTab.id
    }
  },
  methods: {
    onChange(tab) {
      this.activeTab = tab
      this.$emit('change', tab)
    }
  }
}
</script>
<style lang="scss">
  .app-tabs {
    display: flex;
  }
</style>
