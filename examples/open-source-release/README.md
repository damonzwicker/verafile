# Replace manual checksum verification with one command

## Current workflow (manual)

    shasum -a 256 release/example-app-linux-amd64.tar.gz
    cat release/SHA256SUMS
    # manually compare the hash

## VeraFile workflow

    npx verafile verify release/example-app-linux-amd64.tar.gz release/example-app-linux-amd64.proof.json

## Output

    VALID

## What changed

- No manual comparison
- No searching for the correct line
- No risk of human error

Same checksum model — simpler verification.
