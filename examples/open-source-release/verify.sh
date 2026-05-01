#!/bin/bash
set -e

npx verafile verify \
  release/example-app-linux-amd64.tar.gz \
  release/example-app-linux-amd64.proof.json
