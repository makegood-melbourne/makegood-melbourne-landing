
import websocket
import json

def on_message(ws, message):
    print(message)

def on_error(ws, error):
    print(error)

def on_close(ws, close_status_code, close_msg):
    print("### closed ###")

def on_open(ws):
    ws.send(json.dumps({
        "access_token": "access-control-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpdiI6IjRiM2Q4YmQxYWZhM2YxNzJkODY1N2U2MGM3MmRiYjJhIiwiY29udGVudCI6IjBiZjYzZjEyN2VlMTJlYTI5Zjg1NzE1MTA1MzZkMTg5YTMxNGY0MTdkNTQ3YTUzMjQxMmI2MWM2N2JmMzQyYjQzMzUwNDY0MzA0NWMzZTJiYzZlMTAxZjAzYjY4MTI5ZDU1OWM4MDUyMjlkMTkxZmI3ZjdlMmFiYmMyZjBhYWI2ZWRiYmE4ZDcwNDUwOWQ3YTRjMmU4OTQ4NjU2MjJhMTU2M2Y1YTAyNGJhYThhYTc0NjhmYjk0NjgxMWE3ODJkZDEwYjQ3MDczYjUwYmZjZDY1NTdkMWZmNzdkYzBiM2VhMTJlY2ZjODcyMGYyOGFkMTBmNzYyZDUyODQ2YWNmIiwiaWF0IjoxNzY4NjI2MzI2LCJleHAiOjE3Njg2MjY2MjZ9.kTnexL0AhPJx14kLHHyh2nNP-ASUHGJ3iG-T-WkcAio",
        "deploy_id": "69637e3b18b",
        "site_id": "cf004a78-e9cd-4d58-b1a2-b58962670c9f"
    }))

if __name__ == "__main__":
    #websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://socketeer.services.netlify.com/build/logs",
                              on_open=on_open,
                              on_message=on_message,
                              on_error=on_error,
                              on_close=on_close)

    ws.run_forever()
