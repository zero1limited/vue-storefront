import { Module } from 'vuex'
import { FredhopperState } from '../types/FredhopperState'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'

export const module: Module<FredhopperState, any> = {
  namespaced: true,
  mutations,
  actions,
  getters
}