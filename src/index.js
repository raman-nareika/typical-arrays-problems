
exports.min = function min (array) {
  if(!isValid(array))
    return 0;

  return Math.min(...array);
}

exports.max = function max (array) {
  if(!isValid(array))
    return 0;

  return Math.max(...array);
}

exports.avg = function avg (array) {
  if(!isValid(array))
    return 0;

  return array.reduce((p, c) => p + c, 0) / array.length;;
}

const isValid = function(array) {
  return Array.isArray(array) && array.length;
}
