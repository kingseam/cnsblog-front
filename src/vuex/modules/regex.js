const state = {
  main: {
    password: {
      // title: 'must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number',
      title: '패스워드는 1개의 대문자, 1개의 소문자와 1개의 숫자를 포함해야 합니다.',
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$/.source
    }
  }
}

const mutations = {

}

export default {
  state,
  mutations
}
