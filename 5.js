let number = window.prompt("alas&tinggi");
triangle(number);

// triangle(5);

function triangle(num){
    if(0 < num < 10){
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
    }else{
        console.log("error");
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
