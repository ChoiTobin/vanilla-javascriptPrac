let buttons = document.querySelectorAll("button");

var sum =""
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        let buttonValue = this.value;
    if(buttonValue == "C"){sum = ''
        }else{
    sum = sum+buttonValue
        }
       handleSum(sum)
    })
})

function handleSum(value) {
    let resultElement =document.getElementById("result")
    resultElement.textContent=value
    let result = value

    let finalResult = eval(result)
    console.log(finalResult)

    
    finalSum(finalResult)
}
function finalSum(value){
    let resultElement = document.getElementById("finalResult")
    resultElement.textContent =value
}



//음.. 값이 ~ 다안들어왕~ 특수문자등.