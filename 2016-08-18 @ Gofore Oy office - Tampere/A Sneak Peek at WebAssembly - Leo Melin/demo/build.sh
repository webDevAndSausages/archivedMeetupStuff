#!/bin/bash

# 1. Build from source -> .s format (WebAssebly LLVM backend format)
/var/www/wasm-stuff/out/bin/clang -O2 -S --target=wasm32 add.c -o add.s

# 2. Compile .s -format -> WebAssembly text format
/var/www/binaryen/bin/s2wasm add.s > add.wast

# 3. Text format -> Wasm binary
/var/www/binaryen/bin/wasm-as add.wast > add.wasm
