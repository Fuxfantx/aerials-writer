import { readFile, mkdir, writeFile } from "fs/promises"
import { dirname } from "path"

export function Loader(basepath: string, savepath: string) {
  return async (name: string) => {
    let src = (await readFile(`${process.cwd()}/${basepath}/${name}`)).toString()
    let srcls = src.split("\n")
    let srclsx = []
    for (let index = 0; index < srcls.length; index++) {
      const s = srcls[index];
      const l = index + 1

      // Functions with Line ID
      srclsx.push(s.replaceAll("n(", `_n(${l},`).replaceAll("g(", `_g(${l},`).replaceAll("h(", `_h(${l},`))
      // 
      
    }
    let srcx = `
    async () => {
      const { _n, _g, _h } = Aerials;
      ${srclsx.join("\n")}
    }`
    Aerials.clear()
    await eval(srcx)()
    await mkdir(`${process.cwd()}/${savepath}/${dirname(name)}`, { recursive: true })
    await writeFile(`${process.cwd()}/${savepath}/${name}`.replace(".js", ".c.json"), JSON.stringify(Aerials.make()))
    return Aerials.data
  }
}
