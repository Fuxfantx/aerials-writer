export * from "./typesx.js"
import { Node, NodeHandler, WishGroup, WishGroupHandler, Hint, HintHandler } from "./typesx.js"
declare global {
  namespace Aerials {
    type ChartObj = {
      WishGroups: Array<WishGroup>
      Hints: Array<Hint>
    }
  }
}
export default function Chart() {
  const envref = {} as any
  const obj: Aerials.ChartObj = {
    WishGroups: [],
    Hints: [],
  }
  const ctx = {
    current: {
      g: <WishGroupHandler | null>null,
      gn: <NodeHandler | null>null,
      gnh: <HintHandler | null>null,
      h: <HintHandler | null>null,
    }
  }
  const c = {
    get n() {
      return ObjScript.Cache<NodeHandler>()
    },
    get g() {
      return ObjScript.Cache<WishGroupHandler>()
    },
    get h() {
      return ObjScript.Cache<HintHandler>()
    },
  }
  function g(...args: ConstructorParameters<typeof WishGroup>) {
    const o = new WishGroup(...args)
    const oh = new WishGroupHandler(o, envref)
    ctx.current.g = oh
    obj.WishGroups.push(o)
    return oh
  }
  function gn(...args: Parameters<Exclude<typeof ctx.current.g, null>["n"]>) {
    const _t = ctx.current.g
    if (_t) {
      const o = _t.n(...args)
      ctx.current.gn = o
      return o
    } else {
      return undefined as any as ReturnType<Exclude<typeof ctx.current.g, null>["n"]>
    }
  }
  function gnh(...args: Parameters<Exclude<typeof ctx.current.gn, null>["h"]>) {
    const _t = ctx.current.gn
    if (_t) {
      const o = _t.h(...args)
      ctx.current.gnh = o
      return o
    } else {
      return undefined as any as ReturnType<Exclude<typeof ctx.current.gn, null>["h"]>
    }
  }
  function h(...args: ConstructorParameters<typeof Hint>) {
    const o = new Hint(...args)
    const oh = new HintHandler(o, envref)
    ctx.current.h = oh
    obj.Hints.push(o)
    return oh
  }
  return {
    Node,
    NodeHandler,
    WishGroup,
    WishGroupHandler,
    Hint,
    HintHandler,
    envref,
    obj,
    c,
    g,
    gn,
    gnh,
    h,
  }
}
