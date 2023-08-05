const env = Aerials.Chart()
const { g, gn, gnh, h } = env

g(1)
gn(0.5, 0.5, 1000).et(11)
gnh(1, 0.5, 0.5)
gn(0.5, 0.5, 1500).et(22)
gn(0.5, 0.5, 2000).et(33)

h(2, 0.5, 0.5, 3000)
h(3, 0.5, 0.5, 5000)
