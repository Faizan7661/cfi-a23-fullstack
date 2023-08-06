let number = 1;
function show(){
    console.log("hi",number);
    number++;

    show();
}

show();