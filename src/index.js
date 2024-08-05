
// You should implement your task here.

const getSortingTowel = (matrix, array, isRevers) => {
  if(!isRevers) {
    for(let i = 0; i < matrix.length; i++)
      array.push(matrix[i]);
  }
  else {
    for(let i = matrix.length - 1; i >= 0; i--)
      array.push(matrix[i]);
  }
};

module.exports = function towelSort (matrix) {
  let newArray = [];

  if (matrix) {
    matrix.forEach((item, index) => {
      getSortingTowel(matrix[index], newArray, index % 2 == 1);
    }); 
  }
 
  return newArray;
}