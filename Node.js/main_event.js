//set even匿名函数  ts module
var events = require('events');
//create eventEmitter object
var eventEmitter = new events.EventEmitter();

//create a event processing program
var connectHandler = function connected(){
	console.log('connect successful!');

	//trigger data_received event
	eventEmitter.emit('data_received');
}

//binding connection event processing program
eventEmitter.on('connection',connectHandler);

//use anonymous function binding data_received event
eventEmitter.on('data_received',function(){
	console.log('recived data successful!');
});

//trigger connection event
eventEmitter.emit('connection');

console.log("program has finished.");
