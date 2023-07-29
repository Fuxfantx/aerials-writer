import * as aerials from "./aerials.js"
import * as aerialsx from "./aerialsx.js"
import * as tools from "./tools.js"

declare global {
  var Aerials: typeof aerials
  var Aerialsx: typeof aerialsx
  var Tools: typeof tools
}
global.Aerials = aerials
global.Aerialsx = aerialsx
global.Tools = tools