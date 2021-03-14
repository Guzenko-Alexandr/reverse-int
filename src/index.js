module.exports = function reverse(n) {
   let nstr = n.toString().split("").reverse().join("")
   let ansv = parseInt(nstr);
   return ansv;
}


// reverse(123); // 321
// reverse(233); // 332
// reverse(535); // 535
// reverse(95034); // 43059