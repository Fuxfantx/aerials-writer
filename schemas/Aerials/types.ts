export * from "./gen/types.js"
import * as Base from "./gen/types.js"

export class NodeHandler extends Base.NodeHandler {
  h(ZIndex: number, X: number, Y: number) {
    const o = new Base.Hint(ZIndex, X, Y, this.obj.T)
    const oh = new HintHandler(o, this.env)
    this.env.r.obj.Hints.push(o)
    return oh
  }
}
export class WishGroupHandler extends Base.WishGroupHandler {
}
export class HintHandler extends Base.HintHandler {
}
