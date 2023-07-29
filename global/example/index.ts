export {}
declare global {
  var v: typeof _v
}

Adata.event.script.subscribe(() => {
  Adata.data = {}
})

const _v = (key: string | number, value: any) => {
  Adata.data[key] = value
}
global.v = _v