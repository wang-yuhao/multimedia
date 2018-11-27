var server = require("./server_1");
var router = require("./router");

server.start(router.route);
