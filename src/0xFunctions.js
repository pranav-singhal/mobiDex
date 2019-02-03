import {Web3Wrapper} from "@0xproject/web3-wrapper";
const PrivateKeyWalletSubprovider = require('@0xproject/subproviders').PrivateKeyWalletSubprovider;
const ProviderEngine = require('web3-provider-engine');
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
import { ContractWrappers } from '0x.js';
let engine;
let web3Wrapper;
let contractWrappers;
let NETWORK_ID = {
    kovan : 42
};


async function setUpEngine(privateKey){
    if(privateKey.slice(0, 2) === '0x'){
        privateKey.substr(2);
    }
    engine = new ProviderEngine();
    engine.addProvider(new PrivateKeyWalletSubprovider(privateKey));
    engine.addProvider(new RpcSubprovider({ rpcUrl: 'https://kovan.infura.io/ZWXhYfP2uIvdg1yKuQNY' }));
    engine.start();
    web3Wrapper = new Web3Wrapper(engine);
    contractWrappers = new ContractWrappers(engine, { networkId: NETWORK_ID.kovan });
    return true;
}

async function getBalance(tokenAddress, myAddress) {
    let erc20TokenWrapper = contractWrappers.erc20Token;
    let balance = await erc20TokenWrapper.getBalanceAsync(
        tokenAddress,
        myAddress
    );
    return balance;
}