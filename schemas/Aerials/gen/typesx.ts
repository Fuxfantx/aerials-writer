export * from "../types.js"
import * as Ext from "../types.js"
export class NodeHandler extends Ext.NodeHandler {
  private h_lined(line: number, ...args: Parameters<typeof this.h>) {
    const obj = this.h(...args)
    obj.obj.OBJSLine = line
    return obj
  }
}
export class WishGroupHandler extends Ext.WishGroupHandler {
  private n_lined(line: number, ...args: Parameters<typeof this.n>) {
    const obj = this.n(...args)
    obj.obj.OBJSLine = line
    return obj
  }
}
