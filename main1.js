// use as CommonJS, AMD, ES6 module or via window.openpgp
var openpgp = require('openpgp');

// set the relative web worker path
openpgp.initWorker({ path:'lib/openpgp.worker.js' });

openpgp.config.aead_protect = true; // activate fast AES-GCM mode (not yet OpenPGP standard)

/**
 * ENCRYPT WITH GPG KEY
 */

var options, encrypted;

var pubkey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: GPGTools - https://gpgtools.org

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
gJf4InpB2dxOL4K2Z7c=
=W+0N
-----END PGP PUBLIC KEY BLOCK-----`;

options = {
  data: new Uint8Array([0x01, 0x01, 0x01]),           // input as Uint8Array
  publicKeys: openpgp.key.readArmored(pubkey).keys,   // for encryption
  //privateKeys: openpgp.key.readArmored(privkey).keys, // for signing (optional)
  armor: false                                        // don't ASCII armor
};

openpgp.encrypt(options)
  .then(
    function(ciphertext) {
      encrypted = ciphertext.message.packets.write(); // get raw encrypted packets as Uint8Array
      console.log(encrypted);
    },
    function(error) {
      console.log(error);
    }
  );
