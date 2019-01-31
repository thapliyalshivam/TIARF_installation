from websocket_server import WebsocketServer
import json

#receiver = 12
#sender = 12
GLOB={}

# Called for every client connecting (after handshake)
def new_client(client, server):
	print(client['address'])
	if client['address'][0]=='127.0.0.1':
		print("---------------server has joined---------------")
		GLOB['receiver'] = client
	elif client['address'][0]!='127.0.0.1':
		print("_______________controller has joined____________")
		GLOB['sender'] = client
	print(GLOB)
	server.send_message_to_all("Hey all, a new client has joined us")


# Called for every client disconnecting
def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])
	if client['address'][0]=='127.0.0.1':
		print("---------------server has left---------------")
		GLOB['receiver'] = None
	elif client['address'][0]!='127.0.0.1':
		print("_______________controller has left______________")
		GLOB['sender'] = None


# Called when a client sends a message
def message_received(client, server, message):
	if GLOB['receiver'] is not None:
		server.send_message(GLOB['receiver'],message)
	#server.send_message(joinees[0],message)
#	print(message)
	print(json.loads(message)['alpha'])
	if len(message) > 200:
		message = message[:200]+'..'
	print("Client(%d) said: %s" % (client['id'], message))


PORT=9001
server = WebsocketServer(PORT)
server.set_fn_new_client(new_client)
server.set_fn_client_left(client_left)
server.set_fn_message_received(message_received)
server.run_forever()
