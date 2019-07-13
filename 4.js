let d = window.prompt("date");
let m = window.prompt("money");

buyEgg(parseInt(d), parseInt(m));

// buyEgg(25, 50000);
// buyEgg(100, 100000);

function buyEgg(date, money){
    let price = 2000;
    let egg = Math.floor(money/price)
    if(date % 2 == 1){
        bonus = (Math.floor(egg/20)) * 3;
        if(isPrime(date)){
            bonus = bonus + Math.floor(egg/12);
            if(date % 5 == 0){
                if(bonus % 2 == 0){
                    egg = egg + (bonus*10);
                }else{
                    egg = egg + (bonus*5);
                }
                console.log(egg);
            }
        }else{
            if(date % 5 == 0){
                if(bonus % 2 == 0){
                    egg = egg + (bonus*10);
                }else{
                    egg = egg + (bonus*5);
                }
                console.log(egg);
            }
        }
    }else{
        if(isPrime(date)){
            egg = egg + Math.floor(bonus/12);
        }
        console.log(egg);
    }
}

function isPrime(num){
    if (num===1){
        return false;
      }else if(num === 2){
          return true;
      }else{
          for(var x = 2; x < num; x++){
              if(num % x === 0){
              return false;
              }
          }
          return true;
      }
}