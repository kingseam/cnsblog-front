import * as types from '../mutation-types'

const state = {
  main: [],
  board: [],
  user: [],
  msg: []
}

const mutations = {
  [types.FETCH_PRODUCT] (state, products) {
    state.main = products
  },
  [types.BOARD_PRODUCT] (state, products) {
    console.log(state)
    console.log(products)
    state.board = products.data.result
  },
  [types.BOARD_DETAIL_PRODUCT] (state, products) {
    state.board = products.data.result
  },
  [types.REGIST_PRODUCT] (state, products) {
    alert(`[${products.code.code}] : ${products.code.message}`)
  },
  [types.ERROR_PRODUCT] (state, products) {
    console.log(state)
    console.log(products)
    alert('알 수 없는 오류가 발생하였습니다. 서버 관리자에게 문의하세요.')
  },
  [types.LOGIN_PRODUCT] (state, products) {
    localStorage.setItem('userName', products.data.user_name)
    localStorage.setItem('loginYn', 'Y')
    localStorage.setItem('token', products.data.access_token)
    location.href = '/'
  },
  [types.LOGOUT_PRODUCT] (state) {
    localStorage.setItem('userName', 'anonymous')
    localStorage.setItem('loginYn', 'N')
    localStorage.setItem('token', '')
    location.href = '/'
  },
  [types.CHECK_TOKEN_PRODUCT] (state, response) {
    alert('Not allow token')
    localStorage.setItem('userName', 'anonymous')
    localStorage.setItem('loginYn', 'N')
    localStorage.setItem('token', '')
    location.href = '/'
  },
  [types.MESSAGE_PRODUCT] (state, tick) {
    console.log(tick)
    var temp = {
      message: '',
      name: '',
      date: '',
      profileImage: '',
      isMine: ''
    }
    temp.message = tick.body.split('_')[0]
    temp.name = tick.body.split('_')[1]
    temp.date = new Date()
    temp.profileImage = 'http://cfile9.uf.tistory.com/image/25270C4853F7057D09BFD3'
    temp.isMine = false
    state.msg.push(temp)
    console.log(state.msg)
  }
}

export default {
  state,
  mutations
}
