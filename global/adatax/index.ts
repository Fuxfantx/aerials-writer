import * as adatax from "./adatax.js"

declare global {
  var Adatax: typeof adatax
}
global.Adatax = adatax