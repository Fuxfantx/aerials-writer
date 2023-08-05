const env = ObjSchema.Define()
const { c, t, tf } = env

let n = c.t
t("Node", "n").c(n).withline()
const xyt = ["X", "Y", "T"]
for (const k in xyt) {
  tf(xyt[k], "number", true)
}
tf("EaseType", "number", true, 0).chain("et")

let g = c.t
t("WishGroup", "g").c(g).withline()
tf("ZIndex", "number", true)
tf("Nodes", "extern", "Node", true).array().pctor("n")

let h = c.t
t("Hint", "h").c(h).withline()
tf("ZIndex", "number", true)
for (const k in xyt) {
  tf(xyt[k], "number", true)
}

env.sname("Chart")
env.sfield("WishGroups", "extern", g, true).array()
env.sfield("Hints", "extern", h, true).array()
env.senvfn("g", g, "WishGroups", "g").withline()
env.senvfn("gn", "g", "n", "gn", "NodeHandler").withline()
env.senvfn("gnh", "gn", "h", "gnh", "HintHandler").withline()
env.senvfn("h", h, "Hints", "h").withline()
env.slinedcfn(n, "h")
env.slinedcfn(g, "n")