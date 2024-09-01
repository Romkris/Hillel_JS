function pow(a, b) {
    let result = 1;  
    
    for (let i = 0; i < b; i++) {  
        result *= a;  
    }
    return result;  
}

let a = 2;
let b = 3;

console.log(pow(a, b));