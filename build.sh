#!/bin/bash

mkdir -p dist

cp public/* dist/

rollup src/main --file dist/script.js --format iife
