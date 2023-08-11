import Ext from "../env.js"
declare global {
  namespace Aerials {
    type ChartEnv = ReturnType<typeof Chart>
  }
}
export const ChartEnv = {
  LinedEnvFns: ["g", "gn", "gnh", "h"],
  LinedChianFns: ["h", "n"],
}
export function Chart() {
  const ext = Ext()
  function g_lined(line: number, ...args: Parameters<typeof ext.g>) {
    const obj = ext.g(...args)
    obj.obj.OBJSLine = line
    return obj
  }
  function gn_lined(line: number, ...args: Parameters<typeof ext.gn>) {
    const obj = ext.gn(...args)
    obj.obj.OBJSLine = line
    return obj
  }
  function gnh_lined(line: number, ...args: Parameters<typeof ext.gnh>) {
    const obj = ext.gnh(...args)
    obj.obj.OBJSLine = line
    return obj
  }
  function h_lined(line: number, ...args: Parameters<typeof ext.h>) {
    const obj = ext.h(...args)
    obj.obj.OBJSLine = line
    return obj
  }
  const env = {
    ...ext,
    g_lined,
    gn_lined,
    gnh_lined,
    h_lined,
  }
  ext.envref.r = env
  return env
}
