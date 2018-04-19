<template>
  <div>
    <!-- Header -->
    <header class="w3-container w3-theme w3-padding" id="myHeader">
      <div class="w3-center">
      <h1 class="w3-xxxlarge w3-animate-bottom">My page</h1>
        <div class="w3-padding-32">
          <button class="w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey" style="font-weight:900;">Fastblock</button>
        </div>
      </div>
    </header>

    <!-- Modal -->
    <div id="id01" class="w3-modal">
        <div style="top:30%;" class="w3-modal-content w3-card-4 w3-animate-bottom">
          <header class="w3-container w3-theme-l1"> 
            <span onclick="document.getElementById('id01').style.display='none'"
            class="w3-button w3-display-topright">×</span>
            <h4>Add new token</h4>
          </header>
          
          <div class="w3-padding">
            <form class="w3-container w3-card-4">
              <div class="w3-section">
                <label>Address</label>
                <input class="w3-input" type="text" required>
              </div>
            </form>
          </div>

          <footer class="w3-container w3-theme-l1 w3-padding">
            <div class="w3-center">
              <div class="w3-half">
                <button class="w3-bar-item w3-button w3-teal" @click="addNewToken()" >Add</button>
              </div>
              <div class="w3-half">
                <button class="w3-bar-item w3-button w3-red" onclick="document.getElementById('id01').style.display='none'">Cancel</button>
              </div>
            </div>
          </footer>

        </div>
    </div>

    <div id="deposit" class="w3-modal">
        <div style="top:30%;" class="w3-modal-content w3-card-4 w3-animate-bottom">
          <header class="w3-container w3-theme-l1"> 
            <span onclick="document.getElementById('id01').style.display='none'"
            class="w3-button w3-display-topright">×</span>
            <h4>Deposit</h4>
          </header>
          
          <div class="w3-padding">
            <form class="w3-container w3-card-4">
              <div class="w3-section">
                <label>Quantity (Max : 0)</label>
                <input class="w3-input" type="text" required>
              </div>
            </form>
          </div>

          <footer class="w3-container w3-theme-l1 w3-padding">
            <div class="w3-center">
              <div class="w3-half">
                <button class="w3-bar-item w3-button w3-teal">Deposit</button>
              </div>
              <div class="w3-half">
                <button class="w3-bar-item w3-button w3-red" onclick="document.getElementById('deposit').style.display='none'">Cancel</button>
              </div>
            </div>
          </footer>

        </div>
    </div>


    <div id="withdraw" class="w3-modal">
        <div style="top:30%;" class="w3-modal-content w3-card-4 w3-animate-bottom">
          <header class="w3-container w3-theme-l1"> 
            <span onclick="document.getElementById('id01').style.display='none'"
            class="w3-button w3-display-topright">×</span>
            <h4>Withdraw</h4>
          </header>
          
          <div class="w3-padding">
            <form class="w3-container w3-card-4">
              <div class="w3-section">
                <label>Quantity (Max : 0)</label>
                <input class="w3-input" type="text" required>
              </div>
            </form>
          </div>

          <footer class="w3-container w3-theme-l1 w3-padding">
            <div class="w3-center">
              <div class="w3-half">
                <button class="w3-bar-item w3-button w3-teal">Withdraw</button>
              </div>
              <div class="w3-half">
                <button class="w3-bar-item w3-button w3-red" onclick="document.getElementById('withdraw').style.display='none'">Cancel</button>
              </div>
            </div>
          </footer>

        </div>
    </div>




    <div class="w3-row-padding w3-margin-top">

      <div class="w3-first">
        <div class="w3-card w3-container">
        <header class="w3-container">
            <h2 class="w3-center">My wallet</h2>
        </header>

        <div class="w3-row">
          <div class="w3-col s2 w3-center">

            <i class="fa fa-address-book w3-margin-bottom w3-text-theme" style="font-size:120px"></i>

          </div>
          
        <p>Adress : 0x559A679811F932924e5Cd5569f0192167173DCd8</p>
        <div class="w3-col s10 w3-center">
          </div>
          <div class="w3-col s10 w3-center w3-padding">
            <div class="w3-col s2">
              <h4>ETH : 0</h4>
              <button class="w3-button w3-black" onclick="document.getElementById('deposit').style.display='block'">Deposit</button>
            </div>
            <div class="w3-col s2">
              <h4>WETH : 0</h4>
              <button class="w3-button w3-black" onclick="document.getElementById('withdraw').style.display='block'">Withdraw</button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>

    <hr>

    <div class="w3-row-padding w3-margin-top">
      <div class="w3-first">
        <div class="w3-card w3-container" style="min-height:320px">
        <header class="w3-container">
            <h2 class="w3-center">ERC-721 tokens</h2>
            <button class="w3-bar-item w3-button w3-teal w3-right" 
            onclick="document.getElementById('id01').style.display='block'">Add token</button>
        </header>
        <br>

        <div class="w3-border">
          <div id="tokenBtns" class="w3-bar w3-theme">
            <button class="w3-bar-item w3-button testbtn w3-padding-16" @click="openCity('London')">London</button>
            <button class="w3-bar-item w3-button testbtn w3-padding-16" @click="openCity('Paris')">Paris</button>
            <button class="w3-bar-item w3-button testbtn w3-padding-16" @click="openCity('Tokyo')">Tokyo</button>
          </div>

          <div id="London" class="w3-container token w3-animate-opacity">
            <br>
            <div>
              <vue-good-table
                :columns="columns"
                :rows="rows"
                :search-options="{
                  enabled: true,
                }"
                :pagination-options="{
                  enabled: true,
                  perPage: 5,
                }"
                styleClass="vgt-table striped bordered"/>
            </div>
            <br>
          </div>

          <div id="Paris" class="w3-container token w3-animate-opacity">
            <h2>Paris</h2>
            <p>Paris is the capital of France.</p>
            <p>The Paris area is one of the largest population centers in Europe, with more than 12 million inhabitants.</p>
          </div>

          <div id="Tokyo" class="w3-container token w3-animate-opacity">
            <h2>Tokyo</h2>
            <p>Tokyo is the capital of Japan.</p>
            <p>It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
          </div>
        </div>

        <br>
        
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import * as Web3 from 'web3'
import Vue from 'vue'
import VueGoodTable from 'vue-good-table'
// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTable)

export default {
  data () {
    return {
      accounts: [],
      web3js: null,
      output: null,
      columns: [

        {
          label: '#',
          field: 'id',
          type: 'number',
          filterOptions: {
            enabled: true
          }
        },
        {
          label: 'Image',
          field: 'image'
        },
        {
          label: 'TokenId',
          field: 'tokenId'
        },
        {
          label: 'Description',
          field: 'description'
        }
      ],
      rows: [

      ]
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
    var mybtn = document.getElementsByClassName('testbtn')[0]
    mybtn.click()
  },
  methods: {
    async getaccounts () {
      this.accounts = window.web3js.eth.accounts[0]
    },
    async make721 () {
      window.web3js.eth.defaultAccount = window.web3js.eth.accounts[0]
      //  721token code
      var code = '606060405234156200001057600080fd5b604051620013273803806200132783398101604052808051820191906020018051909101905060048280516200004b9291602001906200006a565b506005818051620000619291602001906200006a565b5050506200010f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000ad57805160ff1916838001178555620000dd565b82800160010185558215620000dd579182015b82811115620000dd578251825591602001919060010190620000c0565b50620000eb929150620000ef565b5090565b6200010c91905b80821115620000eb5760008155600101620000f6565b90565b611208806200011f6000396000f3006060604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde038114610100578063081812fc1461018a578063095ea7b3146101bc57806318160ddd146101e057806323b872dd146102055780632f745c591461022d57806342842e0e1461024f5780634e6ec247146102775780634f558e79146102995780634f6ccce7146102c35780636161eb18146102d95780636352211e146102fb57806370a082311461031157806395d89b4114610330578063a22cb46514610343578063b88d4fde14610367578063c87b56dd146103d3578063e985e9c5146103e9575b600080fd5b341561010b57600080fd5b61011361040e565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561014f578082015183820152602001610137565b50505050905090810190601f16801561017c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561019557600080fd5b6101a06004356104b7565b604051600160a060020a03909116815260200160405180910390f35b34156101c757600080fd5b6101de600160a060020a03600435166024356104d2565b005b34156101eb57600080fd5b6101f36105ce565b60405190815260200160405180910390f35b341561021057600080fd5b6101de600160a060020a03600435811690602435166044356105d4565b341561023857600080fd5b6101f3600160a060020a036004351660243561067f565b341561025a57600080fd5b6101de600160a060020a03600435811690602435166044356106cd565b341561028257600080fd5b6101de600160a060020a0360043516602435610703565b34156102a457600080fd5b6102af600435610740565b604051901515815260200160405180910390f35b34156102ce57600080fd5b6101f360043561075d565b34156102e457600080fd5b6101de600160a060020a0360043516602435610793565b341561030657600080fd5b6101a060043561088e565b341561031c57600080fd5b6101f3600160a060020a03600435166108b8565b341561033b57600080fd5b6101136108eb565b341561034e57600080fd5b6101de600160a060020a0360043516602435151561095e565b341561037257600080fd5b6101de600160a060020a036004803582169160248035909116916044359160849060643590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506109ef95505050505050565b34156103de57600080fd5b610113600435610a2e565b34156103f457600080fd5b6102af600160a060020a0360043581169060243516610afd565b610416611141565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ac5780601f10610481576101008083540402835291602001916104ac565b820191906000526020600020905b81548152906001019060200180831161048f57829003601f168201915b505050505090505b90565b600090815260016020526040902054600160a060020a031690565b60006104dd8261088e565b9050600160a060020a0383811690821614156104f857600080fd5b80600160a060020a031633600160a060020a0316148061051d575061051d8133610afd565b151561052857600080fd5b6000610533836104b7565b600160a060020a03161415806105515750600160a060020a03831615155b156105c95760008281526001602052604090819020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0386811691821790925591908316907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35b505050565b60085490565b806105df3382610b2b565b15156105ea57600080fd5b600160a060020a03841615156105ff57600080fd5b600160a060020a038316151561061457600080fd5b61061e8483610b8a565b6106288483610c3a565b6106328383610d68565b82600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405190815260200160405180910390a350505050565b600061068a836108b8565b821061069557600080fd5b600160a060020a03831660009081526006602052604090208054839081106106b957fe5b906000526020600020900154905092915050565b806106d83382610b2b565b15156106e357600080fd5b6106fd8484846020604051908101604052600081526109ef565b50505050565b61070d8282610dc2565b600880546000838152600960205260409020819055600181016107308382611153565b5060009182526020909120015550565b600090815260208190526040902054600160a060020a0316151590565b60006107676105ce565b821061077257600080fd5b600880548390811061078057fe5b9060005260206000209001549050919050565b60008060006107a28585610e24565b6000848152600a602052604090205460026000196101006001841615020190911604156107e0576000848152600a602052604081206107e091611177565b60008481526009602052604090205460085490935061080690600163ffffffff610e7b16565b915060088281548110151561081757fe5b90600052602060002090015490508060088481548110151561083557fe5b6000918252602082200191909155600880548490811061085157fe5b6000918252602090912001556008805490610870906000198301611153565b50600093845260096020526040808520859055908452909220555050565b600081815260208190526040812054600160a060020a03168015156108b257600080fd5b92915050565b6000600160a060020a03821615156108cf57600080fd5b50600160a060020a031660009081526002602052604090205490565b6108f3611141565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ac5780601f10610481576101008083540402835291602001916104ac565b33600160a060020a031682600160a060020a03161415151561097f57600080fd5b33600160a060020a0390811660008181526003602090815260408083209487168084529490915290819020805460ff19168515151790557f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190849051901515815260200160405180910390a35050565b816109fa3382610b2b565b1515610a0557600080fd5b610a108585856105d4565b610a1c85858585610e8d565b1515610a2757600080fd5b5050505050565b610a36611141565b610a3f82610740565b1515610a4a57600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610af15780601f10610ac657610100808354040283529160200191610af1565b820191906000526020600020905b815481529060010190602001808311610ad457829003601f168201915b50505050509050919050565b600160a060020a03918216600090815260036020908152604080832093909416825291909152205460ff1690565b600080610b378361088e565b905080600160a060020a031684600160a060020a03161480610b72575083600160a060020a0316610b67846104b7565b600160a060020a0316145b80610b825750610b828185610afd565b949350505050565b81600160a060020a0316610b9d8261088e565b600160a060020a031614610bb057600080fd5b600081815260016020526040902054600160a060020a031615610c3657600081815260016020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169055600160a060020a038416907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259084905190815260200160405180910390a35b5050565b6000806000610c498585610fff565b600084815260076020908152604080832054600160a060020a0389168452600690925290912054909350610c8490600163ffffffff610e7b16565b600160a060020a038616600090815260066020526040902080549193509083908110610cac57fe5b6000918252602080832090910154600160a060020a0388168352600690915260409091208054919250829185908110610ce157fe5b6000918252602080832090910192909255600160a060020a0387168152600690915260408120805484908110610d1357fe5b6000918252602080832090910192909255600160a060020a0387168152600690915260409020805490610d4a906000198301611153565b50600093845260076020526040808520859055908452909220555050565b6000610d748383611094565b50600160a060020a03821660009081526006602052604090208054908160018101610d9f8382611153565b506000918252602080832091909101849055928152600790925260409091205550565b600160a060020a0382161515610dd757600080fd5b610de18282610d68565b600160a060020a03821660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b610e2e8282610b8a565b610e388282610c3a565b6000600160a060020a0383167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b600082821115610e8757fe5b50900390565b600080610ea285600160a060020a0316611123565b1515610eb15760019150610ff6565b84600160a060020a031663f0b9e5ba8786866040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f49578082015183820152602001610f31565b50505050905090810190601f168015610f765780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1515610f9657600080fd5b5af11515610fa357600080fd5b50505060405180517fffffffff0000000000000000000000000000000000000000000000000000000081167ff0b9e5ba000000000000000000000000000000000000000000000000000000001493509150505b50949350505050565b81600160a060020a03166110128261088e565b600160a060020a03161461102557600080fd5b600160a060020a03821660009081526002602052604090205461104f90600163ffffffff610e7b16565b600160a060020a039092166000908152600260209081526040808320949094559181529081905220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600081815260208190526040902054600160a060020a0316156110b657600080fd5b600081815260208181526040808320805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387169081179091558352600290915290205461110390600161112b565b600160a060020a0390921660009081526002602052604090209190915550565b6000903b1190565b60008282018381101561113a57fe5b9392505050565b60206040519081016040526000815290565b8154818355818115116105c9576000838152602090206105c99181019083016111be565b50805460018160011615610100020316600290046000825580601f1061119d57506111bb565b601f0160209004906000526020600020908101906111bb91906111be565b50565b6104b491905b808211156111d857600081556001016111c4565b50905600a165627a7a723058206d910334333991137e9b6d1359c9033016b456c778c6086bc08165fea70b0bf50029'
      window.web3js.eth.sendTransaction({data: code}, function (err, transactionHash) {
        if (!err) {
          console.log(transactionHash) // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
        }
      })
    },
    async mint () {
      var abi = [{'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_tokenId', 'type': 'uint256'}], 'name': 'getApproved', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_tokenId', 'type': 'uint256'}], 'name': 'approve', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {'name': '_tokenId', 'type': 'uint256'}], 'name': 'transferFrom', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_index', 'type': 'uint256'}], 'name': 'tokenOfOwnerByIndex', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {'name': '_tokenId', 'type': 'uint256'}], 'name': 'safeTransferFrom', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_tokenId', 'type': 'uint256'}], 'name': '_mint', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_tokenId', 'type': 'uint256'}], 'name': 'exists', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_index', 'type': 'uint256'}], 'name': 'tokenByIndex', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_tokenId', 'type': 'uint256'}], 'name': '_burn', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_tokenId', 'type': 'uint256'}], 'name': 'ownerOf', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}], 'name': 'balanceOf', 'outputs': [{'name': '', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_approved', 'type': 'bool'}], 'name': 'setApprovalForAll', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {'name': '_tokenId', 'type': 'uint256'}, {'name': '_data', 'type': 'bytes'}], 'name': 'safeTransferFrom', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_tokenId', 'type': 'uint256'}], 'name': 'tokenURI', 'outputs': [{'name': '', 'type': 'string'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_operator', 'type': 'address'}], 'name': 'isApprovedForAll', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'name': '_name', 'type': 'string'}, {'name': '_symbol', 'type': 'string'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': true, 'name': '_to', 'type': 'address'}, {'indexed': false, 'name': '_tokenId', 'type': 'uint256'}], 'name': 'Transfer', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_owner', 'type': 'address'}, {'indexed': true, 'name': '_approved', 'type': 'address'}, {'indexed': false, 'name': '_tokenId', 'type': 'uint256'}], 'name': 'Approval', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_owner', 'type': 'address'}, {'indexed': true, 'name': '_operator', 'type': 'address'}, {'indexed': false, 'name': '_approved', 'type': 'bool'}], 'name': 'ApprovalForAll', 'type': 'event'}]
      var MyContract = window.web3js.eth.contract(abi)
      // address input으로 받을것.
      var myContractInstance = MyContract.at('0x7c68a2160575132fc9099b3573fdf1902c35c7fd')
      myContractInstance.symbol(function (error, result) {
        if (!error) {
          console.log(result)
        } else {
          console.error(error)
        }
      })
    },
    async openCity (cityName) {
      var i, thisBtn
      var x = document.getElementsByClassName('token')
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
      }
      var activebtn = document.getElementsByClassName('testbtn')
      for (i = 0; i < x.length; i++) {
        activebtn[i].className = activebtn[i].className.replace(' w3-dark-grey', '')
        if (activebtn[i].innerHTML === cityName) {
          thisBtn = activebtn[i]
        }
      }
      document.getElementById(cityName).style.display = 'block'
      thisBtn.className += ' w3-dark-grey'
    },

    async addNewToken () {
      var a = true
      if (a) {
        //  Success to import token address
        var tokenBtns = document.getElementById('tokenBtns')
        var newBtn = document.createElement('button')
        newBtn.setAttribute('class', 'w3-bar-item w3-button testbtn w3-padding-16')
        newBtn.innerHTML = '123'

        tokenBtns.appendChild(newBtn)

        alert('Sucess!')
        document.getElementById('id01').style.display = 'none'
      } else {
        //  Fail to import token address
        alert('Fail!')
      }
    }
  }
}
</script>

<style scoped>
</style>   