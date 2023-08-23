// module.exports = function reverse (n) {
//     return Math.abs(n).toString().split('').reverse().join('');
// }

module.exports = function reverse (n) {
    var a=Math.abs(n);
    var b=a.toString();
    var c=b.split('');
    var d=c.reverse();
    var f=d.join('');

    return f;
}