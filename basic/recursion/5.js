function fun1(x, y) {
    if (y == 0) return 0;
    return (x + fun1(x, y - 1))
}
var res = fun1(3, 5);
console.log(res);