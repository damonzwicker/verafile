"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashFile = hashFile;
exports.verify = verify;
const crypto_1 = require("crypto");
const fs_1 = require("fs");
function hashFile(filePath) {
    const fileBuffer = (0, fs_1.readFileSync)(filePath);
    const hash = (0, crypto_1.createHash)("sha256");
    hash.update(fileBuffer);
    return "0x" + hash.digest("hex");
}
function verify(filePath, proof) {
    const fileHash = hashFile(filePath);
    return fileHash === proof.hash;
}
