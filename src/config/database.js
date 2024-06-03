const fs = require("fs");
const path = require("path");
const usuariosPath = path.join(__dirname, "../data/usuarios.json");
const testePath = path.join(__dirname, "../data/teste.json");

function readJsonFile(path) {
  const data = fs.readFileSync(path, "UTF-8");
  console.log("read:", data);
  return JSON.parse(data.toString());
}

function writeJsonFile(path, data) {
  console.log("write:", data);
  fs.writeFileSync(path, JSON.stringify(data));
}

let userDB = readJsonFile(usuariosPath);
let testeDB = readJsonFile(testePath);

module.exports = { userDB, testeDB, readJsonFile, writeJsonFile };
