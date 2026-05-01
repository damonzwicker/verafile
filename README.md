# VeraFile

A file is either the same—or it isn’t.

Verify that. Independently.

```bash
npx verafile verify example.txt example.proof.json
```

No APIs. No systems. No interpretation.

If one byte changes, verification fails.

---

## Try to break it

```bash
npx verafile verify example.txt example.proof.json
```

Now change the file:

```bash
echo change >> example.txt
npx verafile verify example.txt example.proof.json
```

It should fail.

---

## Example

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