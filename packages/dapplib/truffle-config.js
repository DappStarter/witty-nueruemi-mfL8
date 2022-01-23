require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture street deny noise exchange grace hero equal gentle'; 
let testAccounts = [
"0x0d94fbfdc673f862fd1c217ff475d6bd120d1c8865f1f2d44fc4497994c7da2a",
"0x4d7745a3803f5ae27519fda5d02e75ef18b073918106b9126f4e86e6ec7d458d",
"0x15d29f7eca40581013e9d413b587b3509d6766707ced6fcdc1bd78f1dacb1c46",
"0x00fe32aed1ed37cb0ad249f33f1c63178898385068911e24a7833beb58024689",
"0x1beb1238ac229bec3139bf2b8db241ac2884195d0259ea8b923d60fd0fe7b853",
"0xa11e20b816d72a111ea3229de6558747b0ee70ee302a827431913b891bfabedb",
"0x3f4deece693e7fd03b3ee2ce78b05718f30be120498231b573ac0376fd3e4bb2",
"0xcc448f715041f8d263b784450cba74a0bf06a9d59eab33ccee558927b7979603",
"0x790a62a562dedee09d5f1367d0c5320592ce6ac6c3c206da0adb509c9581a5e4",
"0xe8e438a53c328947e7fdc2a607e1c129f97847d33539a2a606e33553591cefc8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

