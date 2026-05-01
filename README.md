# VeraFile

Run this (copy/paste):

```bash
npx verafile verify example.txt example.proof.json
```

```txt
VALID
```

A file is either the same—or it isn’t.

Verify that. Independently.

No APIs. No systems. No interpretation.

If one byte changes, verification fails.

---

## Try to break it

```bash
echo change >> example.txt
npx verafile verify example.txt example.proof.json
```

```txt
INVALID
```

---

## Create your own proof

```bash
echo data > test.txt
shasum -a 256 test.txt
```

Create `test.proof.json`:

```json
{
  "hash": "0x<PASTE_HASH>"
}
```

Verify:

```bash
npx verafile verify test.txt test.proof.json
```