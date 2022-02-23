require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stool deny ridge coconut install light army gate'; 
let testAccounts = [
"0x79faedf41f201bec19c4a0df5346f6952d57cb85e78b557e25e28b8523ce5e97",
"0x415eebd0bdeecfc482ab77caf59d4110f63200592e3b0801b21b9c0bd6ad37b0",
"0x87a92e174c88eba645c7b2648003a513d7b2c56992adbe4d7edf2c1ac67209a4",
"0x30919d669787585433a560c30b4b8b9ea797c29a2043fa2b95de715b7c976b33",
"0x877ecbceb30dd09275ba004fb585267da46ef90248420c68583ddeb72b49adf9",
"0x7eca6a49cf87bbcec08726d21fa74509e9c313051f1ad7c0eb924946f2984e05",
"0xf12449185cae3992091f5775f245e164d051d423bc5bb396834037b64e17b33e",
"0x078395fc0a77a8be7dea8ad1aaa97c98c049a58806ab5ef68eaa9293c9db6e2b",
"0xd4b8d4bcee37afadad827272ddce1fc8757cdadc5416526915f748aa45a7d5fe",
"0x9053c748807e0fb79c475bab968482637c26e57aa6cf2ccba4dab22f7fa70e2b"
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

