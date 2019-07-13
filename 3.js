let s = window.prompt("string");
let f = window.prompt("frasa");
hitungFrasa(s,f);

// hitungFrasa("banananana","nana");

function hitungFrasa(string, frasa){
    if(frasa.length>string.length){
        console.log("error");
    }else{
        let arr = [];
    
        for(let i=0; i<=(string.length-frasa.length);i++){
            let temp = string[i];
            for(let j=1; j<frasa.length;j++){
                temp = temp + string[i+j];
            }
            arr.push(temp);
            temp = temp.split("");
            temp = temp.reverse();
            temp = temp.join(""); 
            arr.push(temp);
        }
        let count = 0;
        for(let k=0; k<arr.length; k++){
            if(arr[k] == frasa){
                count++;
            }
        }
        console.log("ditemukan " + count + " kali");
        }
}