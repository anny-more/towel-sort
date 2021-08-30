// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length < 1) {
    return []
  };

  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(((i % 2) === 0) ? matrix[i][j] : matrix[i][matrix[i].length -1 -j]); 
    }
  };
  return result;
}
