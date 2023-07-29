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
    return this
  }

  public _h(line: number | undefined, x: number, y: number) {
    return _h(line, x, y, this.t, false)
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
type Moder<T = number> = ((v: T) => T)
export const moder = {
  time: <Moder | undefined>undefined,
  note: <{
    x?: Moder
    y?: Moder
    et?: Moder
  }>{}
}

export const _n = (line: number | undefined, x: number, y: number, t: number, easetype: number = 0) => {
  x = moder.note.x?.(x) ?? x
  y = moder.note.y?.(y) ?? y
  t = moder.time?.(t) ?? t
  easetype = moder.note.et?.(easetype) ?? easetype
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
export const _h = (line: number | undefined, x: number, y: number, t: number, mod = true) => {
  if (mod) {
    t = moder.time?.(t) ?? t
  }
  const hint = new Hint(x, y, t, line)
  data.hints.push(hint)
  return hint
}
export const h = (x: number, y: number, t: number) => {
  return _h(undefined, x, y, t)
}

export const set_time_offset = (v: number) => {
  moder.time = (r) => r + v 
}
export const set_nx_offset = (v: number) => {
  moder.note.x = (r) => r + v 
}
export const set_ny_offset = (v: number) => {
  moder.note.y = (r) => r + v 
}

export const clear = () => {
  data.groups.length = 0
  data.hints.length = 0
  moder.time = undefined
  moder.note = {}
}
export const make = () => {
  return {
    WishGroups: data.groups.map(g => g.make()),
    Hints: data.hints.map(h => h.make()),
  }
}