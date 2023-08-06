function sortArrayAscending(array) {
    console.log(array.sort((a, b) => {
        return a - b;
    }));

}

sortArrayAscending([1, 22, 500, 5, 9, 11, 23, 200]);