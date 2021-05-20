

var get_smallest = (arr) => {
  var smallest = arr.reduce((a, b) => {
    return Math.min(a, b);
  })
  var index = arr.indexOf(smallest);
  console.log(`最小値は${smallest}`);
  console.log(`最小値のインデックスは${index}`);
}