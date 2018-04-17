<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <div> 
      <nuxt-link to="/mypage">
        my page
      </nuxt-link>
    </div>
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import * as Web3 from 'web3'
export default {
  data () {
    return {
      web3js: null
    }
  },
  async mounted () {
    let web3 = window.web3
    window.addEventListener('load', function () {
      if (typeof web3 !== 'undefined') {
        this.web3js = new Web3(web3.currentProvider)
      } else {
        console.log('No web3? You should consider trying MetaMask!')
        this.web3js = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
      }
    })
  },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
