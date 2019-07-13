// function input(){
//     let user_name = window.prompt("username");
//     let pass_word = window.prompt("password");
    
//     is_username_valid(user_name);
//     is_password_valid(pass_word);
// }

is_username_valid("@sony");
is_username_valid("Ayu99v");
is_password_valid("p@ssW0rd#");
is_password_valid("C0d3YourFuture!#");

function is_username_valid(username){
    let usn = /^[^0-9$&\+,:;\=\?@#|'<>\.\-_^\*()%!][$&\+,:;\=\?@#|'<>\.\-_^\*()%!0-9a-zA-z]{5,9}$/;
    if(username.match(usn)){
        // return true;
        console.log(true);
    }else{
        // return false;
        console.log(false);
    }
}

function is_password_valid(password){
    let pwd = /^(?=.*[@])(?=.*[A-Z])(?=.*[$&\+,:;\=\?#|'<>\.\-_^\*()%!])[$&\+,:;\=\?@#|'<>\.\-_^\*()%!0-9a-zA-z]{8,}$/;
    if(password.match(pwd)){
        // return true;
        console.log(true);
    }else{
        // return false;
        console.log(false);
    }
}