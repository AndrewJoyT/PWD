// function FPB () {
//   if ( arguments.length == 2 ) {
//    var a, b, c;
//    if ( arguments[0] > arguments[1] ) {
//     a = arguments[0];
//     b = arguments[1];
//    } else {
//     a = arguments[1];
//     b = arguments[0];
//    }
//    c = a % b;
//    if ( c == 0 ) return b
//    else return FPB ( b, c > 0 ? c : b + c )
//   } else if ( arguments.length > 2 ) {
//    arguments.slice = Array.prototype.slice;
//    if ( arguments.length % 2 == 0 ) { // genap
//     var limit = arguments.length / 2;
//     return FPB (
//      FPB ( arguments.slice( 0, limit ) ),
//      FPB ( arguments.slice( limit ) ) )
//     } else // ganjil
//     return FPB ( arguments[0],
//      FPB ( arguments.slice( 1 ) ) );
//   } else {
//    if ( typeof arguments[0] == typeof [1,2,3] )
//     return FPB.apply( this, arguments[0] );
//    return arguments[0]
//   }
//  }
  
//  function KPK () {
//   if ( arguments.length == 2 )
//    return arguments[0] * arguments[1] / FPB ( arguments[0], arguments[1] )
//   else if ( arguments.length > 2 ) {
//    arguments.slice = Array.prototype.slice;
//    if ( arguments.length % 2 == 0 ) { // genap
//     var limit = arguments.length / 2;
//     return KPK ( KPK ( arguments.slice( 0, limit ) ),
//         KPK ( arguments.slice( limit ) ) )
//    } else // ganjil
//     return KPK ( arguments[0], KPK( arguments.slice(1) ) )
//   } else {
//    if ( typeof arguments[0] == typeof [1, 2, 3] ) // array
//     return KPK.apply( this, arguments[0] );
//    return arguments[0];
//   }
//  }

//  console.log(KPK(2,5))  
//  console.log(FPB(5,2))

 // function gcd(a, b) {
//     if (a == 0) {
//         return b
//     }
//     if (b == 0) {
//         return a
//     }
//     if (a == b) {
//         return a
//     }
//     if (a > b) {
//         return gcd(a - b, b);
//     }
//     return gcd(a, b - a);
// }

// function fpb(x,y) {
//   let a=x
//   let b=y
//   while (y) {
//       var t = y;
//       y = x % y;
//       x = t;
//   }
//   // return x;
//   return console.log("FPB "+a+" & "+b+ " = " + x)
// }
// console.log(fpb(2,3))
  
// var a = 2
// var b = 3
// console.log("FPB of " + a + " and " + b + " is " + fpb(a, b))

function fpb_kpk(x, y) {
  let a=x
  let b=y

  while (y) {
      var t = y;
      y = x % y;
      x = t;
  }
  let kpk = (a * b) / x
  // return x;
  return console.log("FPB " + a + " & " + b + " = " + x + "\nKPK " + a + " & " + b + " = " + kpk)
}

console.log(fpb_kpk(2, 3))
// console.log(fpb_kpk(5, 7)