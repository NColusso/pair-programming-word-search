// Completed by Natasha Colusso and Michael Xiang

const transpose = function (matrix) {
  // Put your solution here
  const obj = {};
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (obj[j]) {
        obj[j].push(matrix[i][j]);
      } else {
        obj[j] = [matrix[i][j]];
      }
    }
  }
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
};


const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return "array is empty";
    } else if (word.length === 0) {
        return "no word";
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)||l.includes(word.split("").reverse().join(''))) return true
    }
    const rotated = transpose(letters)
    const verticalJoin = rotated.map(ls => ls.join(""))
    for (l of verticalJoin) {
      if (l.includes(word) || l.includes(word.split("").reverse().join(''))) {
        return true;
      } 
    }

    return false;
}

module.exports = wordSearch

