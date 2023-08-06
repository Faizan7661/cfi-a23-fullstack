function robot(n, a, b) {
    if (n <= 0) { return; }
    robot(n - 1, b, b + n)
    console.log(n, a, b)
    robot(n - 1, b, a + n)
}

robot(3,5,3)