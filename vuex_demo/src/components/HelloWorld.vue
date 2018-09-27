<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
      <button @click="submitForm">获取数据</button>
    </div>
    <div v-for="item in nums" :key="item.index"></div>
  </div>
</template>

<script>
import store from '@/store/store'
import numObj from '@/global/goods'
export default {
  name: 'HelloWorld',
  
  data () {
    return {
      msg:'Hello Vuex',
      nums: numObj.num
    }
  },
  store,
  methods: {
    submitForm () {
      this.$store.dispatch('saveForm')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
