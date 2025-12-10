console.log(`Hello`);

let password;

document.getElementById("passwordinput").onclick = function(){
    password = document.getElementById("password").value;
    console.log(password);
    let result = password.includes("wanderforaspell");
    if(result){
        console.log("ACCESS GRANTED");
        window.location.href = "users.html"
    }
    else{
        console.log("ONRIO CONVERGENCE FAILURE.");
    }
}