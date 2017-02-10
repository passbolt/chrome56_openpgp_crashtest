// use as CommonJS, AMD, ES6 module or via window.openpgp
var openpgp = require('openpgp');

// set the relative web worker path
openpgp.initWorker({ path:'lib/openpgp.worker.js' });

openpgp.config.aead_protect = true; // activate fast AES-GCM mode (not yet OpenPGP standard)

/**
 * ENCRYPT WITH GENERATED GPG KEY
 */
var options = {
  userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
  numBits: 4096,                                            // RSA key size
  passphrase: 'super long and hard to guess secret'         // protects the private key
};

openpgp.generateKey(options).then(function(key) {
  var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
  var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '

  options = {
    data: 'Hello, World!',                             // input as String (or Uint8Array)
    publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
    privateKeys: openpgp.key.readArmored(privkey).keys // for signing (optional)
  };

  openpgp.encrypt(options).then(function(ciphertext) {
    encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
  },
  function (error) {
    console.log(error);
  });
},
function (error) {
  console.log(error);
});