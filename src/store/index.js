import { createStore } from 'vuex'

export default createStore({
  state: {
    number: '',
    outputNumber: '0'
  },
  mutations: {
    outputValue(state, load) {
      if(load === '=') {
        state.number = eval(state.number)
        state.outputNumber = state.number
        state.number = ''
      } else {
        state.number += load
        state.outputNumber = state.number
      }
    },
    reset(state) {
      state.number = '',
      state.outputNumber = '0'
    },
    deletevalue(state) {
      state.number = state.number.slice(0, -1)
      state.outputNumber = state.number
    }
  },
  actions: {
    outputValue(context, load) {
      context.commit('outputValue', load)
    },
    reset(context) {
      context.commit('reset')
    },
    deletevalue(context) {
      context.commit('deletevalue')
    }
  },
  modules: {
  },
  getters: {
    outputNumber(state) {
      return state.outputNumber
    }
  }
})
