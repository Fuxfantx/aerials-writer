import * as aerials from "./aerials.js"
import * as aerialsx from "./aerialsx.js"

declare global {
  var Aerials: typeof aerials
  var Aerialsx: typeof aerialsx
}
global.Aerials = aerials
global.Aerialsx = aerialsx