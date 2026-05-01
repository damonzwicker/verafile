# VeraFile

Verify a file from a portable proof artifact in one command.

```bash
npx verafile verify file.pdf proof.json
```

Output:

```bash
VALID
```

or:

```bash
INVALID
```

---

## What VeraFile Does

VeraFile recomputes the SHA-256 hash of a local file and compares it against the hash stored in a proof JSON file.

If one byte changes, verification fails.

Verification is independent of the originating system.

No API required.

---

## Example Proof

```json
{
  "hash": "0x..."
}
```

---

## Quick Start

Run directly with NPX:

```bash
npx verafile verify example.txt example.proof.json
```

Modify the file:

```bash
echo change >> example.txt
```

Verify again:

```bash
npx verafile verify example.txt example.proof.json
```

Result:

```bash
INVALID
```

---

## Install

```bash
npm install -g verafile
```

---

## Local Development

```bash
npm install
npm run build
node dist/cli.js verify example.txt example.proof.json
```

---

## Relationship to OCP

VeraFile is a minimal CLI implementation inspired by the Observation Commitment Protocol (OCP).

OCP defines a minimal verification model:

```text
data → digest → public commitment
recompute → compare → confirm inclusion
```

This CLI currently verifies the file-to-digest step.

Future implementations may additionally verify ledger inclusion and commitment proofs.

---

## Links

OCP Repository:
https://github.com/damonzwicker/observation-commitment-protocol

Live Demo:
https://observation-commitment-protocol.vercel.app/

---

## License

MIT