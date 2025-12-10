console.log(`Hello`);

let city;

document.getElementById("cityButton").onclick = function(){
    city = document.getElementById("city").value;
    console.log(city);
    let result = city.includes("myletter");
    if(result){
        console.log("ACCESS GRANTED");
        window.location.href = "myletter.html"
    }
    else{
        console.log("ONHRIO CONVERGENCE FAILURE.");
    }
}



