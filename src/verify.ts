import { createHash } from "crypto";
import { readFileSync } from "fs";

export function hashFile(filePath: string): string {
  const fileBuffer = readFileSync(filePath);
  const hash = createHash("sha256");
  hash.update(fileBuffer);
  return "0x" + hash.digest("hex");
}

export function verify(filePath: string, proof: any): boolean {
  const fileHash = hashFile(filePath);
  return fileHash === proof.hash;
}
