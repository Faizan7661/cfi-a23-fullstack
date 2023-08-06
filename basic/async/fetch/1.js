import axios from "axios";
/*
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        // let filteredArr = data.filter(ele => ele.userId === 5)
        // console.log('this is Filtered',filteredArr);
        let filteredArr = data.filter(ele => ele.userId === 5)
        console.log('this is Filtered',filteredArr);
*/

function hitAPI(){
    axios.get('https://www.w3schools.com/js/js_proise.asp')
    .then((res)=>{
        let data = res.data;
        console.log(data)

    }).catch((error)=>{

        console.log(error.response.data, error.response.status);
        console.log(`someThing went wrong`)
    })
}

hitAPI()


