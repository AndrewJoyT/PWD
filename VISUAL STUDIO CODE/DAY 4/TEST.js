var output = ''

for(var i=0; i<5; i++){
    for(var j=0; j<=i; j++){
        output += ' * '
    }
    if (i<4){
        output+='\n'
    }
}
console.log(output)



// for(var i=0; i<5; i++){
//     for(var j=0; j<=i; j++){
//         output += ' * '
//     }
//     if (i<4){
//         output+='\n'
//     }
// }


