<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'Hello Vuex'
    }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
