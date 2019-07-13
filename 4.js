function buyEgg(date, money){
    let price = 2000;
    let egg = Math.floor(money/price);
    if(date % 5 == 0){
        if(isPrime(date)){
            bonus = Math.floor(egg/12);
            if(bonus % 2 == 0){
                bonus = bonus*10;
                egg = egg + bonus;
                console.log(egg);
            } else{
                bonus = bonus*5;
                egg = egg+bonus;
                console.log(egg);
            }
        }else{
            bonus = Math.floor(egg/20);
            bonus = bonus*3;
            if(bonus % 2 == 0){
                bonus = bonus*10;
                egg = egg + bonus;
                console.log(egg);
            } else{
                bonus = bonus*5;
                egg = egg+bonus;
                console.log(egg);
            }
        }
    }else{
        if(isPrime(date)){
            bonus = Math.floor(egg/12);
            egg = egg + bonus;
            console.log(egg);
        }else{
            bonus = Math.floor(egg/20);
            egg = egg + bonus;
            console.log(egg);
        }
    }
}


function isPrime(num){
    for(let i=2; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
  return num > 1;
}

buyEgg(25, 50000);

// prima = 1 lusin (12) telur bonus 1 telur
// ganjil = 1 kodi(20) telur bonus 3 telur
// kelipatan 5 = bonus*10 jika bonus genap
// kelipatan 5 = bonus*5 jika bonus ganjil