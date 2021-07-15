// Block
{
    // compound statment
}

// if (true) {
//     var a = 10;
//     console.log(a);
// }


// Block Scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


// Shodowing
let b = 100
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
    {
        let b = 1000;
        console.log(b);
    }
}
console.log(b);