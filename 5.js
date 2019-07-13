// function triangle(num){
//     for(let i="*"; i.length <= num; i+="*"){
//         console.log(i);    
//     }
// }

// triangle(7);

// function triangle(num){
//     let res = '';
//     for(let i=1; i<=num; i++){
//         for(let j=0; j<i; j++){
//             res = res+'*';
//         }
//         console.log(res);
//         res = '';
//     }
// }

// triangle(7);

function triangle(num){
    let res = '';
    let x = 2;
    for(let i=1; i<=num; i++){
        for(let j=0; j<i; j++){
            while(isPrime(x) == false){
                x++;
            }
            res = res+ ' ' +x;
            x++;
        }
        console.log(res);
        res = '';
    }
}

function isPrime(n){
    if (n===1){
      return false;
    }else if(n === 2){
        return true;
    }else{
        for(var x = 2; x < n; x++){
            if(n % x === 0){
            return false;
            }
        }
        return true;
    }
}

triangle(5);