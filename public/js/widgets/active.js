$.fn.hummingbirdActive = function(socket, options) {
  if(this.length == 0) { return; }

  this.each(function() {
    new Hummingbird.Active($(this), socket, options);
  });

  return this;
};


if(!Hummingbird) { var Hummingbird = {}; }

Hummingbird.Active = function(element, socket, options) {
  this.element = element;
  this.socket = socket;

  var defaults = {
    every: 1,
    averageOver: 1,
    ratePerSecond: 20,
    decimalPlaces: 0
  };

  this.options = $.extend(defaults, options);
  this.initialize();
};

Hummingbird.Active.prototype = new Hummingbird.Base();

$.extend(Hummingbird.Active.prototype, {
  name: "Active",
  onMessage: function(message) {
    this.element.text((message).toFixed(this.options.decimalPlaces));
  }
});
