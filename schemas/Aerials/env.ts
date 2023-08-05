import Base from "./gen/env.js"
declare global {
  namespace Aerials {
  }
}
export default function Chart() {
  const base = Base()
  return {
    ...base,
  }
}