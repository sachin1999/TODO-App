const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://attentive-stylish-waterfall.ethereum-sepolia.quiknode.pro/da5d6bbfaec6dd4c55a339e5882fe22339398039/")
const contractAddress = "0x4223827b9ba9308e660b383e97fb42a025fe3416";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
