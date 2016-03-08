var Metric = require('../metric');

var active = Object.create(Metric.prototype);
var list = Object.create(null);

active.name = 'active';
active.initialData = 0;
active.interval = 1000; // ms

active.increment = function (request) {
	console.log(request);
	// IP will be considered active for the next 60 seconds
	list[request.params.ip] = Date.now() + 60000;
};

setInterval(function () {
	var keys = Object.keys(list);
	var now = Date.now();

	active.data = keys.length;

	for (var i = 0; i < keys.length; i++) {
		if (list[keys[i]] < now) {
			delete list[keys[i]];
		}
	}
}, 500);

module.exports = active;
