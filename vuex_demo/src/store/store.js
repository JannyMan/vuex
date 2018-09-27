import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
    count: 1,
    data: []
}
const mutations = {
    add(state) {
        state.count += 1;
    },
    reduce(state) {
        state.count -= 1;
    },
    getData(state) {
        state.data =axios({
                        method:'get',
                        baseURL: '/api',
                        url: '/shop/php/getAllStorage.php'
                    }).then((res) => res)
    }
}

const actions = {
    saveForm(context) {
        //https://www.291buy.cn/shop/php/storage.php
        axios({
            method:'get',
            baseURL: '/api',
            url: '/shop/php/getAllStorage.php'
        }).then((res) => {console.log(res)})
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})