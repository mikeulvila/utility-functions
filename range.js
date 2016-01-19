module.exports = function (length, max) {
  var array = [];

  if (length && max) {
    for (var i = length; i < max; i++) {
      array.push(i);
    };
  } else {
    for (var i = 0; i < length; i++) {
    array.push(i);
    };
  };
  return array;
}; 
