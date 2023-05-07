
let generateEl = document.querySelector(".generate-btn");
console.log(generateEl);

let stringEl = document.querySelector(".string-btn")
console.log(stringEl);
let random_string = ""
generate_string(10);
console.log(generate_string);
generateEl.addEventListener('click',()=>{
    generate_string(10);
    console.log(random_string);
})


function generate_string(password_length){
    let random_string = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*><?/+=';
    for (var i, i = 0; i<password_length; i ++){
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    stringEl.innerHTML = random_string;
    random_string = ""
    return random_string;
}


