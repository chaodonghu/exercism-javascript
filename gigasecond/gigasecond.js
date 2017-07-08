var aGigaSecond = Math.pow(10, 9);

var Gigasecond = function (date) {
  this.gs = new Date(date.toString());
  this.gs.setUTCSeconds(this.gs.getUTCSeconds() + aGigaSecond);
};

Gigasecond.prototype.date = function () {
  return this.gs
};

module.exports = Gigasecond;
