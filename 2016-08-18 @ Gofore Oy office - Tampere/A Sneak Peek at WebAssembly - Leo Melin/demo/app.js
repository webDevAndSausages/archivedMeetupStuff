fetch('./add.wasm')
.then(response => response.arrayBuffer())
.then(buffer => {
  const moduleBufferView = new Uint8Array(buffer)
  const wasmModule = Wasm.instantiateModule(moduleBufferView)
  window.add = wasmModule.exports.add
})
