<template>
  <div>
    <!-- Header -->
    <header class='w3-container w3-theme w3-padding' id='myHeader'>
      <div class='w3-center'>
      <h1 class='w3-xxxlarge w3-animate-bottom'>My page</h1>
        <div class='w3-padding-32'>
          <button class='w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey' style='font-weight:900;'>Fastblock</button>
        </div>
      </div>
    </header>

    <!-- Modal -->
    <button class='w3-bar-item w3-button w3-teal' @click='makeorder()' >makeorder</button>
    <button class='w3-bar-item w3-button w3-teal' @click='depositEther(message)' >Deposit</button>
    <button class='w3-bar-item w3-button w3-teal' @click='depositEther(message)' >Deposit</button>

    

    <hr>
    <hr>
  </div>
</template>

<script>
import * as Web3 from 'web3'
// import the styles 
import 'vue-good-table/dist/vue-good-table.css'
import * as eutil from 'ethereumjs-util'

export default {
  data () {
    return {
      web3js: null,
      ts: null
    }
  },
  async mounted () {
    let web3 = window.web3
    // var self = this
    var promise = new Promise(function (resolve, reject) {
      window.addEventListener('load', function () {
        if (typeof web3 !== 'undefined') {
          this.web3js = new Web3(web3.currentProvider)
        } else {
          console.log('No web3? You should consider trying MetaMask!')
          this.web3js = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
        }
      })
    })
    promise.then(function (val) {
      console.log('mounted')
    })
  },
  methods: {
    async makeorder () {
      var promise = new Promise(function (resolve, reject) {
        window.web3js.eth.sign(window.web3js.eth.accounts[0], window.web3js.sha3('foobar'), (err, result) => {
          if (!err) {
            resolve(result)
          }
        })
      })
      promise.then(function (val) {
        let rsv = eutil.fromRpcSig(val)
        console.log(val)
        console.log(eutil.bufferToHex(eutil.sha3('foobar')))
        console.log(eutil.bufferToHex(rsv.r))
        console.log(eutil.bufferToHex(rsv.s))
        console.log(rsv.v)
        var abi = [{'constant': true, 'inputs': [{'name': 'orderAddresses', 'type': 'address[3]'}, {'name': 'orderValues', 'type': 'uint256[2]'}], 'name': 'getOrderHash', 'outputs': [{'name': '', 'type': 'bytes32'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': 'hash', 'type': 'bytes32'}, {'name': 'v', 'type': 'uint8'}, {'name': 'r', 'type': 'bytes32'}, {'name': 's', 'type': 'bytes32'}], 'name': 'isValidSignature', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}]
        var MyContract = window.web3js.eth.contract(abi)
        // address input으로 받을것.
        var myContractInstance = MyContract.at('0x2c11c7c11e5166922dbedf139ee21fafbb7da9d7')
        myContractInstance.isValidSignature(window.web3js.sha3('foobar'), rsv.v, eutil.bufferToHex(rsv.r), eutil.bufferToHex(rsv.s), function (error, result) {
          if (!error) {
            console.log('sender: ')
            console.log(result)
          } else {
            console.error(error)
          }
        })
      })
    },
    async mint () {
    }
  }
}
</script>

<style scoped>
</style>   