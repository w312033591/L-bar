import * as types from './mutation-types'

export const state = {
  loginStatus: JSON.parse(localStorage.getItem('loginStatus') || '{}'),
  userIfo: JSON.parse(localStorage.getItem('userIfo') || '{}')
}

export const mutations = {
  [types.SET_LOGIN](state, {loginStatus, userIfo}) {
    state.loginStatus = loginStatus
    state.userIfo = userIfo
    localStorage.setItem('loginStatus', JSON.stringify(state.loginStatus))
    localStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  },
  [types.LOGOUT](state) {
    state.loginStatus = {}
    state.userIfo = {}
    localStorage.setItem('loginStatus', JSON.stringify(state.loginStatus))
    localStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  },
  [types.SET_HEAD_THUMB](state, imgSrc) {
    state.userIfo.head_thumb = imgSrc
    localStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  },
  [types.SET_NICKNAME](state, nickname) {
    state.userIfo.nickname = nickname
    localStorage.setItem('userIfo', JSON.stringify(state.userIfo))
  }
}
