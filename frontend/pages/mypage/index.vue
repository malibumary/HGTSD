<template>
    <div>
        <h2>My page</h2>
        <button class="buy" @click="getaccounts">구매</button>
        <p> 사용자 account address :  {{ this.accounts }}</p> 
    </div> 
</template>

<script>
import * as Web3 from 'web3'
export default {
  data () {
    return {
      counter: 0,
      accounts: [],
      aaa: null
    }
  },
  async mounted () {
    let web3 = window.web3
    window.addEventListener('load', function () {
      if (typeof web3 !== 'undefined') {
        this.aaa = new Web3(web3.currentProvider)
      } else {
        console.log('No web3? You should consider trying MetaMask!')
        this.aaa = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
      }
    })
  },
  methods: {
    async getaccounts () {
      this.accounts = window.aaa.eth.accounts[0]
    }
  }
}
</script>

<style scoped>
</style>   