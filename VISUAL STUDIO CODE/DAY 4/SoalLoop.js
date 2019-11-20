
var z = ''
for( i=0; i<=5; i++){
    for(j=i; j<=5; j++){
        z+= '*'
    }
    if (i<=4){
        z+='\n'
    }
}
console.log(z)


var z = ''
for( i=1; i<=5; i++){
    for(j=0; j<=i; j++){
        z+= '*'
    }
    if (i<=4){
        z+='\n'
    }
}
console.log(z)