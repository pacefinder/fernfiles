console.log(`Hello`);

let answer;

document.getElementById("answerButton").onclick = function(){
    answer = document.getElementById("answer").value;
    console.log(answer);
    let result = answer.includes("endingthecycle");
    if(result){
        console.log("ACCESS GRANTED");
        window.location.href = "theend.html"
    }
    else{
        console.log("ONHRIO CONVERGENCE FAILURE.");
    }
}



