function fibonacci(num) {
  if (num === 0 ||num === 1 ) {
    return 0;
  }
   if (num === 2 ) {
    return 1;
  }

  var prev = 0;
  var current = 1;

  for (var i = 3; i <= num; i++) {
    var next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

module.exports = fibonacci;