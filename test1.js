// use as CommonJS, AMD, ES6 module or via window.openpgp

var openpgp = require('openpgp');
openpgp.config.use_native = false;

// set the relative web worker path
openpgp.initWorker({ path:'lib/openpgp.worker.js' });
openpgp.config.aead_protect = true; // activate fast AES-GCM mode (not yet OpenPGP standard)

/**
 * Generate key
 */
var options = {
  userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
  numBits: 2048,                                            // RSA key size
  passphrase: 'super long and hard to guess secret'         // protects the private key
};
console.log('generating key');
openpgp.generateKey(options).then(function(key) {

  console.log('key generated ok');
  var openpgpRes = openpgp.key.readArmored(key.publicKeyArmored);
  console.log(openpgpRes);

  var key = openpgpRes.keys[0];
  console.log(key.getExpirationTime());
  console.log(key.getPrimaryUser());
},
function (error) {
  console.log(error);
});
