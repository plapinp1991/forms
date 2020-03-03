const types = {
}

const getInitialState = () => ({
  questionsMenuItems: [
    { id: 1, title: 'Параметры' },
    { id: 2, title: 'Вопросы' },
    { id: 3, title: 'Логика' },
    { id: 4, title: 'Условия' },
    { id: 5, title: 'Респонденты' }
  ],
  questionsMenuContent: {
    RESPONDENTS: 5
  }
})

const getters = {
  getQuestionsMenuItems: state => state.questionsMenuItems,
  getQuestionsMenuContent: state => state.questionsMenuContent
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state: getInitialState(),
  mutations,
  actions,
  getters
}
