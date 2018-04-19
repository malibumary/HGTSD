<template>
  <div>
    <!-- Header -->
    <header class="w3-container w3-theme w3-padding" id="myHeader">
      <div class="w3-center">
      <h1 class="w3-xxxlarge w3-animate-bottom">ERC-721 DEMO</h1>
        <div class="w3-padding-32">
          <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" style="font-weight:900;">Fastblock</button>
        </div>
      </div>
    </header>

    <!-- Modal -->
    <div id="id01" class="w3-modal">
        <div class="w3-modal-content w3-card-4 w3-animate-top">
          <header class="w3-container w3-theme-l1"> 
            <span onclick="document.getElementById('id01').style.display='none'"
            class="w3-button w3-display-topright">×</span>
            <h4>Oh snap! We just showed you a modal..</h4>
            <h5>Because we can <i class="fa fa-smile-o"></i></h5>
          </header>
          <div class="w3-padding">
            <p>Cool huh? Ok, enough teasing around..</p>
            <p>Go to our <a class="w3-btn" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
          </div>
          <footer class="w3-container w3-theme-l1">
            <p>Modal footer</p>
          </footer>
        </div>
    </div>

    <div class="w3-row-padding w3-center w3-margin-top">
    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:320px">
      <h3>My page</h3><br>
      <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <hr>
      <a class="w3-button w3-theme" onclick="window.location.href='/mypage'">My page</a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:320px">
      <h3>Buy ERC-721 tokens</h3><br>
      <i class="fa fa-gem w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <hr>
      <a class="w3-button w3-theme" onclick="window.location.href='/marketplace'">Marketplace</a>
      </div>
    </div>

    <div class="w3-third">
      <div class="w3-card w3-container" style="min-height:320px">
      <h3>Activity</h3><br>
      <i class="fa fa-exchange-alt w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
      <hr>
      <a class="w3-button w3-theme" onclick="window.location.href='/activity'">Activity</a>
      </div>
    </div>
    </div>

    <hr>

    <div class="w3-row-padding w3-center w3-margin-top">
    <div class="w3-first">
      <div class="w3-card w3-container" style="min-height:320px">
      <h1>What is the OOOOOOO?</h1><br>
      <h4>

        
      OOOOOOO is a game centered around breedable, collectible, and oh-so-adorable 
      creatures we call OOOOOOO! Each cat is one-of-a-kind and 100% owned by you; it 
      cannot be replicated, taken away, or destroyed.
      </h4>
      </div>
    </div>
    </div>

    <hr>
  </div>

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
