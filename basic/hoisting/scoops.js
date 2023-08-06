
//Block Level Scope
for (let i=0;i<10;i++){
    console.log(i);
}
console.log('Going to While');

//Global Scope
let i =50;
while(i<100){
    console.log(i);
    i++
}

console.log(`Print value of i = ${i}`);

function printj(){
    let j=0;
    console.log(j++)
}

printj()