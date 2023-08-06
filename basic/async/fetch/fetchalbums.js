fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => console.log(json))