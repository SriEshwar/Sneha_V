let rate=0
function calculate(){
    var input_month = Number(document.getElementById("input").value)
    if(input_month<=3){
        rate = 3.5
    }
    else if(input_month>3 && input_month<=6){
        rate = 6.5
    }
    else if(input_month>6 && input_month<=9){
        rate = 7.5
    }
    else if(input_month>=10){
        rate = 9
    }
    let result = document.querySelector("#result")
    result.innerHTML = "your interest rate is "+rate
}