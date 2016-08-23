#!/bin/bash

# 1. Use emscripten to compile source -> asm.js
emcc add.c -o add.js -s ONLY_MY_CODE=1 -s BINARYEN=\'/private/var/www/binaryen/\' -s EXPORTED_FUNCTIONS="['_add']" -O3

# 2. WebAssembly text format -> WebAssembly binary
# (for the demo, I rename the function name from _add to add with sed...)
sed -i.bak s/_add/add/g add.wast
/var/www/binaryen/bin/wasm-as add.wast > add.wasm
