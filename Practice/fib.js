// function fibonacci(number){
//     let a = 0
//     let b = 1
//     for(let i = 0 ; i < number ; i++){
//         console.log(a)
//         a = b
//         b = a + b
        
//     }
// }
// let fibSeries = fibonacci(10)
// console.log(fibSeries)

let a = 0
let b = 1
let c
let sum = 1
for(let i = 0 ; i < 11 ; i++){
    
    console.log(a)
    c = a + b
    a = b
    b = c

    sum += b
    
}
console.log(sum)