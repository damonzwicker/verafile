#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const verify_1 = require("./verify");
const args = process.argv.slice(2);
if (args.length < 3) {
    console.log("Usage: verafile verify <file> <proof.json>");
    process.exit(1);
}
const command = args[0];
if (command !== "verify") {
    console.log("Unknown command");
    process.exit(1);
}
const filePath = args[1];
const proofPath = args[2];
try {
    const proofRaw = (0, fs_1.readFileSync)(proofPath, "utf-8");
    const proof = JSON.parse(proofRaw);
    const result = (0, verify_1.verify)(filePath, proof);
    if (result) {
        console.log("VALID");
    }
    else {
        console.log("INVALID");
    }
}
catch (err) {
    console.error("Error:", err);
    process.exit(1);
}
