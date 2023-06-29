let buttons = document.querySelectorAll("button");

var sum =""
buttons.forEach(function(button){
    button.addEventListener("click",function(){

    let buttonValue = this.value;

    if(buttonValue == "C"){
        sum = ''
        finalSum()
    }else if(buttonValue !== "="){
        sum = sum+buttonValue
    }
       handleSum(sum,buttonValue)
        
    })
})

function handleSum(value,buttonValue) {
    let resultElement =document.getElementById("result")
    resultElement.textContent=value
    let result = value
    let finalResult = eval(result)

    if(buttonValue == "="){
        finalSum(finalResult,buttonValue)
    }


}
function finalSum(value){
    
    let resultElement = document.getElementById("finalResult")
    resultElement.textContent =value

}


// = 버튼을 누른다. => finalResult에 값을 finalSum에 준다.