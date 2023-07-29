import * as Adata from "adata"

await Adata.load_global()

const server = Adatax.serve(1357)

const base = "scripts"
const save = "./data/"
Adata.watch(base, {
  loader: Aerialsx.Loader(base, save),
  on_result: server.broadcast_result,
  savepath: save
})