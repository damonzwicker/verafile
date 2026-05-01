#!/usr/bin/env node

import { readFileSync } from "fs";
import { verify } from "./verify";

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
  const proofRaw = readFileSync(proofPath, "utf-8");
  const proof = JSON.parse(proofRaw);

  const result = verify(filePath, proof);

  if (result) {
    console.log("VALID");
  } else {
    console.log("INVALID");
  }
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
}
