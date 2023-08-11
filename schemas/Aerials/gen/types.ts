export class Node {
  OBJSLine?: number
  constructor(
    public X: number,
    public Y: number,
    public T: number,
  ) {}
  EaseType: number = 0
}
export class NodeHandler {
  constructor(
    public obj: Node,
    public envref: ObjScript.Ref<Aerials.ChartEnv>,
  ) {}
  get env() {
    return this.envref.r
  }
  c(cache: ObjScript.Cache<NodeHandler>) {
    cache.r = this
    return this
  }
  et(value: number) {
    this.obj.EaseType = value
    return this
  }
}
export class WishGroup {
  OBJSLine?: number
  constructor(
    public ZIndex: number,
  ) {}
  Nodes: Array<Node> = []
}
export class WishGroupHandler {
  constructor(
    public obj: WishGroup,
    public envref: ObjScript.Ref<Aerials.ChartEnv>,
  ) {}
  get env() {
    return this.envref.r
  }
  c(cache: ObjScript.Cache<WishGroupHandler>) {
    cache.r = this
    return this
  }
  n(...args: ConstructorParameters<Aerials.ChartEnv["Node"]>) {
    const o = new this.env.Node(...args)
    const oh = new this.env.NodeHandler(o, this.envref)
    this.obj.Nodes.push(o)
    return oh
  }
}
export class Hint {
  OBJSLine?: number
  constructor(
    public ZIndex: number,
    public X: number,
    public Y: number,
    public T: number,
  ) {}
}
export class HintHandler {
  constructor(
    public obj: Hint,
    public envref: ObjScript.Ref<Aerials.ChartEnv>,
  ) {}
  get env() {
    return this.envref.r
  }
  c(cache: ObjScript.Cache<HintHandler>) {
    cache.r = this
    return this
  }
}
