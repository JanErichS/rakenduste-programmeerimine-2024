import jwt from "jsonwebtoken";

import crypto from "crypto"; // For the secret key

// Generate keypair
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// Signable = { name: string }

export function signToken(req, res) {
  const signable = req.body;
  jwt.sign(signable, privateKey, { algorithm: "RS256" }, function (err, token) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(token);
    console.log(signable);
    res.send({ token });
  });
}

export function verifyToken(req, res) {
  const verifiable = req.body;
  jwt.verify(verifiable.token, privateKey, function (err, decoded) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(decoded);
    res.send(decoded);
  });
}

export default { signToken, verifyToken };
