/**
 * Parsing loop issue
 */
var openpgp = require('openpgp');
openpgp.config.use_native = false;

// set the relative web worker path
openpgp.initWorker({ path:'lib/openpgp.worker.js' });
openpgp.config.aead_protect = true; // activate fast AES-GCM mode (not yet OpenPGP standard)

for (i=0; i < 20; i++) {
  var key = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v2.3.2
Comment: http://openpgpjs.org

mQENBFid3AQBCADEbHEe38ezje3xK+yICD/0Gr7Go254Lb5nhTquUYHC8EIKxDr3
RPQp5uXMLiB1fAgSPasLzCL9zTGjRAwX/cDS3zAMIXG71jS49otO7EeSVRWv8/vF
k5HZQgd9jDutx395Y6csvMPu5fDVinTprAfyWum5T9WvIBmnD807/mnrjfW8xPZg
uHoB8ZqqtwNP+i82bX2bgzRwKFw24CTyGV+wa8aJHH8gZbQu5oX8lHe4MuHB9Ux1
4vxvGadTjtOTWyurBgt+h6aHwhk0QK+VpdgKyUW4KggN3L6c32teAjCLyquXJMgz
/EommmynuYn/LIahlXrm5tLaRbzsd5gKCg8dABEBAAG0HUtldmluICh0ZXN0KSA8
a2V2aW5AdGVzdC5jb20+iQE3BBMBCgAhBQJYndwEAhsDBQsJCAcDBRUKCQgLBRYC
AwEAAh4BAheAAAoJENg5bPOLmWbLVrYH/iS+N8SItKefj6zEDbWMJ/kJIt919AZx
IYRS2YPpuzyLIffSIglCJ+gH5RZn/5F+8K5iWkjWvE3NoIuJBf1uUVAXwVj+6RDV
ryQayiGiuryIqGxME4JEOjeMnHw+YLD/kKOnTQBiJdnvt6C7tF9RKrTNyZ5WswN6
y8BAlxK4iSjxMYLEQ67dYpqFckWoGQUIkNDZOFywda9ogG/Qsb9PTuAp4+j3/7zK
jkIn35wEEFSNq1jNtF0DRf+SCf9NTDNwncx1TnZuQpuFYN0y7zeu0rkt0AiqTR1c
EvBZ0pWLSjW7KJInbMWnpCK/UeMIBfYbYTht6MKkpuUmoEHMXjwiCFS5AQ0EWJ3c
BAEIAMmkYk6NPm79fyOPRSAL0Fu3WOh1n4oVq50r3DFaoEUtECyUx+PgWEtmIEDL
rvvkJ25lUtNmyO560mUrPWRY5qWm2Uq0zpt+srqCpq8r0atkIkRhUXGTI7NNjQ1w
aherrQyc4hl3rEWadVfE24xaEuD1ssRYaK6JMsTXlwv5RlE5940LP09LdRulM+y9
rWj5u7avQv9YklkB12hoe8UJkUkG6DG9EYav8cXcIG4TEL5+u+g5rIikXe1YDLsn
EPuihhZ7hZqcO1YFCkcPrvoXMIOEcHVJHlr12vU5Ftje2bbrfs3vvZNNeNghdTlQ
mGqK5k1zS0f2+F7kZWPoI3nkHy0AEQEAAYkBHwQYAQoACQUCWJ3cBAIbDAAKCRDY
OWzzi5lmy85JB/987WNJyc6uycrCeB8eNSP6b+xOkbNU9nb/eraZGl2xm34il1aw
zRVuSUxclbaI5pqFvvE6rFVTXY2aTMf4/ikn3JOyZFgtLMpbH49410/uJaR6OfiL
8F4A9SMmmmfbKJ96Mzw61EXtF1BN/BjmWckrItK6Fn8YGQRK5YXknovM7jJJ+aH6
k3pGNkxOMfqXqX15ClmDOz2zEl+TXqYz2st7rzkR8wi5bD2Y7PLRaZEuZ1kclF2J
GM08jLGXSJ1osGnSRi2QUS0XpgyrD3ekwyqWSw62USFRHrJpgTvKyrT0H80t9ISv
xU08EoKQkQ/H9emrtZnqfckKGgtIKoMux71g
=PBXL
-----END PGP PUBLIC KEY BLOCK-----`;
  var openpgpRes = openpgp.key.readArmored(key);
  console.log(openpgpRes);
}