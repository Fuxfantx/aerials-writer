export {}
declare global {
  type WishGroup = {
    zindex: number
    nodes: Node[]
  }
  type Node = [number, number, number, number]
  type Hint = [number, number, number, 0]
}
declare global {
  var X: 0
  var Y: 1
  var T: 2
  var groups: WishGroup[]
  var hints: Hint[]
  var g: typeof _g
  var h: typeof _h
}

Adata.event.script.subscribe(() => {
  global.groups = []
  global.hints = []
})
Adata.event.finish.subscribe(() => {
  Adata.data = {
    WishGroups: groups.map((g) => [3, g.zindex, ...g.nodes]),
    Hints: hints,
  }
})

global.X = 0
global.Y = 1
global.T = 2
const _g = (zindex: number, ...contains:Node[]) => {
  const g: WishGroup = {
    zindex,
    nodes: contains
  }
  groups.push(g)
  return g
}
global.g = _g
const _h = (x1: number, y1: number, t1: number) => {
  const h: Hint = [x1, y1, t1, 0]
  hints.push(h)
  return h
}
global.h = _h