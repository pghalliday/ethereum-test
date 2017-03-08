const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const dataDir = path.resolve(__dirname, '..', 'data');
const passPhraseFile = path.resolve(__dirname, '..', '.pass-phrase');
const contractFile = path.resolve(__dirname, '..', 'greeter.sol');
const addressFile = path.join(dataDir, 'greeter.address');
const provider = path.join(dataDir, 'geth.ipc');
const abiFile = path.join(buildDir, 'greeter.abi');
const codeFile = path.join(buildDir, 'greeter.code');
const method = 'greet';
const args = [];
const contractArgs = ['Hello World!'];
const gas = 300000;
const contractName = 'greeter';

module.exports = {
  buildDir: buildDir,
  dataDir: dataDir,
  addressFile: addressFile,
  passPhraseFile: passPhraseFile,
  contractFile: contractFile,
  provider: provider,
  abiFile: abiFile,
  codeFile: codeFile,
  method: method,
  args: args,
  contractArgs: contractArgs,
  gas: gas,
  contractName: contractName,
};