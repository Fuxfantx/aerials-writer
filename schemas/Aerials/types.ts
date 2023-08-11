export * from "./gen/types.js"
import * as Base from "./gen/types.js"

export class NodeHandler extends Base.NodeHandler {
  h(ZIndex: number, X: number, Y: number) {
    const o = new this.env.Hint(ZIndex, X, Y, this.obj.T)
    const oh = new this.env.HintHandler(o, this.envref)
    this.env.obj.Hints.push(o)
    return oh
  }
}
export class WishGroupHandler extends Base.WishGroupHandler {
}
export class HintHandler extends Base.HintHandler {
}
