import { WebSocket, WebSocketServer } from "ws"

export function serve(port: number) {
  const wss = new WebSocketServer({ port })
  console.log("WebSocketServer Started.")
  const broadcast_result = async (name: string, data: any) => {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify([name, data]));
      }
    })
  }
  return { wss, broadcast_result }
}