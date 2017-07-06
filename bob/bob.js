var Bob = function() {};

Bob.prototype.hey = function(input) {
  // If sentence contains just capital letters or is all uppercase  - Shouting.
  // Catches scenario if asked a forceful question.
  if (input === input.toUpperCase() && input !== input.toLowerCase())
    return "Whoa, chill out!";

  // If asked a question. (sentence ends in question mark)
  if (input.endsWith('?'))
    return "Sure.";

  // If addressed without actually saying anything, blank space.
  if (input.trim() === '')
    return "Fine. Be that way!";

  // Anything else
  return "Whatever.";
  };

module.exports = Bob;
