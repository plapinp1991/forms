<template>
  <div class="app-layout">
    <div class="app-questions__search">
      <Input placeholder="Поиск по системе"/>
      <UserInfo/>
    </div>
    <div class="app-questions__nav">
      <Tabs
        :items="questionsMenuItems"
        @change="onChangeQuestionsNav"
      />
    </div>
    <div class="app-questions__content">
      <IfRespondentsForm
        v-if="questionsMenuContentId === questionsMenuContent.RESPONDENTS"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Input from '@/components/Input'
import UserInfo from '@/components/UserInfo'
import Tabs from '@/components/Tabs'
import IfRespondentsForm from '@/forms/IfRespondentsForm'

export default {
  name: 'Dashboard',
  components: {
    Input,
    UserInfo,
    Tabs,
    IfRespondentsForm
  },
  data() {
    return {
      questionsMenuContentId: this.defaultMenuContentId || 5
    }
  },
  computed: {
    ...mapGetters({
      questionsMenuItems: 'questions/getQuestionsMenuItems',
      questionsMenuContent: 'questions/getQuestionsMenuContent'
    }),
    defaultMenuContentId() {
      return this.questionsMenuContent && this.questionsMenuContent.RESPONDENTS
    }
  },
  methods: {
    onChangeQuestionsNav(navItem) {
      this.questionsMenuContentId = navItem.id
    }
  }
}
</script>
<style lang="scss">
  .app-layout {
    width: 100%;
    padding: 40px 20px;
  }

  .app-questions__search {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app-questions__nav {
    margin-top: 50px;
  }
</style>
