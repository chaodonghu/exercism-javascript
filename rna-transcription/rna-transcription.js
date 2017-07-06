// Create DnaTranscriber module
var DnaTranscriber = function () {

};

// Create toRna method for module
DnaTranscriber.prototype.toRna  = function (dna) {

  // Store nucleotide conversion in hash
  var rnaMap = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };

  // Convert dnaStrand string into an array
  dna = dna.split('');

  // Initialize empty string to store the RNA nucleotides
  var rna = '';

  // Take each letter in the array and retrieve its value based on the rnaMap hash
  // Store the result in the rnaStrand string
  dna.map(function(letter){
    rna += rnaMap[letter];
  });
  return rna;
};

module.exports = DnaTranscriber;