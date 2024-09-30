import jwt from "jsonwebtoken";


const privateKey = "SuperSalajaNeV6Ti";

export function signToken({ signable }) {
  jwt.sign(signable, privateKey, { algorithm: "RS256" }, function (err, token) {
    console.log(token);
  });
}

export function verifyToken(token) {
  jwt.verify(token, privateKey, function (err, decoded) {
    console.log(decoded);
  });
}
