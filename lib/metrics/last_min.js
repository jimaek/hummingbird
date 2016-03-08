var Metric = require('../metric');

var lm = Object.create(Metric.prototype);
var last = 0;
var sum = 0;

lm.name = 'last_min';
lm.initialData = 0;
lm.interval = 1000; // ms

lm.increment = function () {
	sum += 1;
};

setInterval(function () {
	lm.data = last;
}, 1000);

setInterval(function () {
	last = lm.data = sum;
	sum = 0;
}, 60000);

module.exports = lm;
