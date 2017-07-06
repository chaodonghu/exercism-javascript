var Hamming = function () {};

Hamming.prototype.compute = function (dnaA, dnaB) {
  var difference = 0;
  if (dnaA.length !== dnaB.length) { throw new Error ('DNA strands must be of equal length.')}
  for (var i = 0; i <= dnaB.length; i++) {
    if (dnaA.charAt(i) !== dnaB.charAt(i)) {
      difference = difference + 1;
    }
  }
  return difference;
}

module.exports = Hamming;