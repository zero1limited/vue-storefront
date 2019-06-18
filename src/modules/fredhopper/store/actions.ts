import { FredhopperState } from '../types/FredhopperState'
import { ActionTree } from 'vuex';
import * as types from './mutation-types'
import config from 'config'
import axios from "axios";

// it's a good practice for all actions to return Promises with effect of their execution
export const actions: ActionTree<FredhopperState, any> = {
  gethero ({}, params) {
    let url = config.fredhopper.endpoint.gethero

    console.log('callums params:')
    console.log(params)
    return axios
        .post(url, params)
        .then(resp => { return resp })
  },
  search ({}, params) {
    let url = config.fredhopper.endpoint.search

    return axios
        .post(url, params)
        .then(resp => { return resp })
  }
}
