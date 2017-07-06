// Initialize the function
Pangram = function (str) {
  this.str = str
}

// Initialize the object contructor function for alphabet
Pangram.prototype.alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

// Initialize the isPangram function
Pangram.prototype.isPangram = function () {
  var sentence = this.str.toLowerCase();
  for (var i = 0; i < this.alphabet.length; i ++) {
    if (!sentence.includes(this.alphabet[i])) {
      return false;
    }
  }
  return true;
}

module.exports = Pangram