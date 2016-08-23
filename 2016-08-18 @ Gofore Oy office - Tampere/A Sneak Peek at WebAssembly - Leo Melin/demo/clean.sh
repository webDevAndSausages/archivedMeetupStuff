#!/bin/bash
# Clean previously compiled wasm stuff. For demo purposes.
{
    rm add.w*
    rm add.s
    rm add.js
    rm add.asm.js
} &> /dev/null
