fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const titlesStartingWithVowel = data.filter(item => /^[aeiou]/i.test(item.title));
    console.log(titlesStartingWithVowel);
  })
  .catch(error => console.log(error));
