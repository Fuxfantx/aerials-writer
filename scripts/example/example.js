const { n, g, h, set_time_offset } = Aerials
const { e } = Tools

g(0, n(1, 2, 0), n(1, 2, 0))
h(1, 2, 0)

e()

set_time_offset(10)
Aerials.moder.note.x = (v) => 5 - v

g(0, n(1, 2, 0), n(1, 2, 0))
.n[0].h(1, 2)

