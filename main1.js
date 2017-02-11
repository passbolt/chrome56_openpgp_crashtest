/**
 * Key generation issue
 */
var openpgp = require('openpgp');
openpgp.config.use_native = true;

openpgp.initWorker({ path:'lib/openpgp.worker.js' });
openpgp.config.aead_protect = true;

var options = {
 userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
 numBits: 4096,                                            // RSA key size
 passphrase: 'super long and hard to guess secret'         // protects the private key
};

openpgp.generateKey(options).then(function(key) {

   console.log('key generated ok');

   var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
   var pubkey = key.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '

   options = {
    data: 'Hello, World!',                             // input as String (or Uint8Array)
    publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
    //privateKeys: openpgp.key.readArmored(privkey).keys // for signing (optional)
   };

   openpgp.encrypt(options).then(function(ciphertext) {
      encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'

      console.log('text encrypted ok');
      console.log(encrypted);
     },
     function (error) {
      console.log(error);
     });
  },
  function (error) {
   console.log(error);
  });