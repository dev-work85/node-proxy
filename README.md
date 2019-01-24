# node-proxy
adds proxy for get post requests to given url 
start the server by node server.js

example for GET request : 
curl http://localhost:3000/proxy/http://httpbin.org/get

example for POST request : 
curl -d "asdf=blah" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/proxy/http://httpbin.org/post
