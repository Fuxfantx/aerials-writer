export class Node {
  public x: number
  public y: number
  public t: number
  public easetype: number

  public line: number | undefined = undefined

  public constructor(x: number, y: number, t: number, easetype: number, line?: number) {
    this.x = x
    this.y = y
    this.t = t
    this.easetype = easetype

    this.line = line
  }

  public make() {
    return [this.x, this.y, this.t, this.easetype]
  }

  public et(easetype: number) {
    this.easetype = easetype
  }

  public _h(line: number | undefined, x: number, y: number) {
    _h(line, x, y, this.t)
    return 
  }
  public h(x: number, y: number) {
    return this._h(undefined, x, y)
  }
}
export class WishGroup {
  public z: number
  public n: Node[]

  public line: number | undefined = undefined

  public constructor (zindex: number, nodes: Node[], line?: number) {
    this.z = zindex
    this.n = nodes

    this.line = line
  }

  public make() {
    const nodes = this.n.map(n => n.make())
    return [3, this.z, ...nodes]
  }
}
export class Hint {
  public x: number
  public y: number
  public t: number
  
  public line: number | undefined = undefined

  public constructor(x: number, y: number, t: number, line?: number) {
    this.x = x
    this.y = y
    this.t = t
    
    this.line = line
  }

  public make() {
    return [this.x, this.y, this.t, 0]
  }
}

export const data = {
  groups: <WishGroup[]>[],
  hints: <Hint[]>[]
}

export const _n = (line: number | undefined, x: number, y: number, t: number, easetype: number = 0) => {
  return new Node(x, y, t, easetype, line)
}
export const n = (x: number, y: number, t: number, easetype: number = 0) => {
  return _n(undefined, x, y, t, easetype)
}
export const _g = (line: number | undefined, zindex: number, ...contains: Node[]) => {
  const group = new WishGroup(zindex, contains, line)
  data.groups.push(group)
  return group
}
export const g = (zindex: number, ...contains: Node[]) => {
  return _g(undefined, zindex, ...contains)
}
export const _h = (line: number | undefined, x: number, y: number, t: number) => {
  const hint = new Hint(x, y, t, line)
  data.hints.push(hint)
  return hint
}
export const h = (x: number, y: number, t: number) => {
  return _h(undefined, x, y, t)
}

export const clear = () => {
  data.groups.length = 0
  data.hints.length = 0
}
export const make = () => {
  return {
    WishGroups: data.groups.map(g => g.make()),
    Hints: data.hints.map(h => h.make()),
  }
}