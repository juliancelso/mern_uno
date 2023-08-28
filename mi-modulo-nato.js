exports.deletrear = s => {
    let m =  {
      "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo",
      "F": "Foxtrot", "G": "Golf", "H": "Hotel", "I": "India",
      "J": "Juliett","K": "Kilo", "L": "Lima", "M": "Mike",
      "N": "November","O": "Oscar", "P": "Papa", "Q": "Quebec", "R": "Romeo",
      "S": "Sierra", "T": "Tango", "U": "Uniform", "V": "Victor",
      "W": "Whiskey", "X": "X‐ray", "Y": "Yankee", "Z": "Zulu"
    }
    return [...s].map(x => m[x.toUpperCase()]).join(' ');
  }