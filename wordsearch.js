const transpose = function(matrix) {
  let finalMatrix = [];
  for (let y = 0; y < matrix[0].length; y++) {
    let newArray = [];
    for (let i = 0; i < matrix.length; i++) {
      newArray.push(matrix[i][y]);
    }
    finalMatrix.push(newArray);
  }
  matrix = finalMatrix;
  return matrix;
};

const backwards = (letters) => {
  let finalArray = [];
  for (const arr of letters) {
    let reverseLetters = arr.reverse();
    finalArray.push(reverseLetters);
  }
  letters = finalArray;
  return letters;
};

const wordSearch = (letters, word) => {
  if (letters.length > 0) {
    const transposeLetters = transpose(letters);

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const verticalJoin = transposeLetters.map(ls => ls.join(''));
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    const horizontalReverseLetters = backwards(letters);
    const horiBackwardJoin = horizontalReverseLetters.map(ls => ls.join(''));
    for (const l of horiBackwardJoin) {
      if (l.includes(word)) return true;
    }
    const verticalReverseLetters = backwards(transposeLetters);
    const vertBackwardJoin = verticalReverseLetters.map(ls => ls.join(''));
    for (const l of vertBackwardJoin) {
      if (l.includes(word)) return true;
    }
  }
  return false;
};

module.exports = wordSearch;