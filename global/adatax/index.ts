import { WebSocket, WebSocketServer } from "ws"

declare global {
  var Adatax: typeof MOD
  var ___init_Adatax: typeof ___init
}
const MOD = {
  config: {
    ws: false,
    port: 13551,
  }
}
global.Adatax = MOD

function ___init() {
  if (Adatax.config.ws) {
    const wss = new WebSocketServer({ port: Adatax.config.port })
    console.log("WebSocketServer Started.")
    Adata.event.result.subscribe(async (name, data) => {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify([name, data]));
        }
      })
    })
  }
}
global.___init_Adatax = ___init