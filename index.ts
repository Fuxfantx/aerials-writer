import * as core from "@objscript/core"

import { WebSocket, WebSocketServer } from "ws"

function serve(port: number) {
  const wss = new WebSocketServer({ port })
  console.log(`WebSocketServer Start.`)
  const broadcast_result = async (name: string, data: any) => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify([name, data]));
      }
    })
  }
  return { wss, broadcast_result }
}

await core.init({
  watch: {
    savepath: "output",
    eval: { WithLine: true },
    onresult: serve(1357).broadcast_result,
  }
})