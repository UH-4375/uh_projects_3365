import session from '../utilities/session'
import axios from '../utilities/axios'
import config from '../config'
import router from '../router'
import Swal from 'sweetalert2'
/* eslint-disable no-param-reassign */

export default {
  state: {
    auth: session.getAuth(),
    user: session.getUser(),
  },
  getters: {
    isAuthenticated(state) {
      return state.auth !== null && typeof state.auth !== 'undefined'
    },
    auth(state) {
      return state.auth
    },
    user(state) {
      return state.user
    },
  },
  mutations: {
    setAuthentication(state, obj) {
      if (obj) {
        state.auth = obj.token
        state.user = obj.login
        session.setAuthentication(obj)
      } else {
        state.auth = null
        state.user = null
        session.clear()
      }
    },
  },
  actions: {
    logout(context) {
      context.commit('setAuthentication')
      router.push('/login')
    },
    login(context, obj) {
      return axios
        .post(`${config.api}/auth/login`, obj)
        .then(res => {
          context.commit('setAuthentication', res.data)
        })
        .catch(() => {
          Swal.fire({
            title: 'Invalid credentials!',
            text: 'Please try again!',
            icon: 'error'
          })
        })
    },
    register(context, obj) {
      return axios
        .post(`${config.api}/auth/register`, obj)
        .then(() => {
          Swal.fire({
            title: 'Account created',
            text: 'Please login!',
            icon: 'success'
          })
          router.push('/')
        })
        .catch(() => {
          Swal.fire({
            title: 'Invalid credentials!',
            text: 'Please try again!',
            icon: 'error'
          })
        })
    },
    updateLogin(context, obj) {
      return axios
        .post(`${config.api}/auth/user`, obj)
        .then(() => {
          Swal.fire({
            title: 'Account updated',
            text: 'Please login!',
            icon: 'success'
          })
        })
        .catch(() => {
          Swal.fire({
            title: 'Invalid data!',
            text: 'Please try again!',
            icon: 'error'
          })
        })
    },
  },
}