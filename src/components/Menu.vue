<template>
  <div class="app-menu">
    <router-link
      v-for="(item, ndx) in items"
      :key="ndx"
      :to="item.hash"
      tag="div"
    >
      <MenuItem
        :is-active="$route.path.includes(item.hash)"
        :title="item.title"
      />
    </router-link>
  </div>
</template>
<script>
import MenuItem from '@/components/MenuItem'

export default {
  name: 'Menu',
  components: {
    MenuItem
  },
  data() {
    return {
      items: [
        { title: 'Опросы', hash: 'questions' },
        { title: 'Пользователи', hash: 'users' },
        { title: 'Черные списки', hash: 'lists' },
        { title: 'Колл-центр', hash: 'call' }
      ]
    }
  }
}
</script>
<style lang="scss">
  .app-menu {
    padding-top: 100px;
    width: 130px;
    display: inline-block;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgb(247, 247, 247);
  }
</style>
