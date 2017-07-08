function Isogram(phrase) {
  this.phrase = phrase;
};

Isogram.prototype.isIsogram = function() {
  // Convert phrase to lowercase and replace all spaces from phrase
  var convertPhrase = this.phrase.toLowerCase().replace(/[\-\s]+/g, '');
  // Make phrase into an object of values
  var set = new Set(convertPhrase.split(''));

  // See if the converted phrases length is equal to the set's size
  return convertPhrase.length === set.size;
}

module.exports = Isogram;
