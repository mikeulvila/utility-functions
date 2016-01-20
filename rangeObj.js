module.exports = function (num) {
  var range = require('./range')(num);
  var rangeObj = range.reduce(function (pv, cv, i) {
      pv[cv] = cv;
      return pv;
  }, {});

  return rangeObj;

};
