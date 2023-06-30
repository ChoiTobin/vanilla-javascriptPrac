let buttons = document.querySelectorAll("button");

var Num_String_sum =""






buttons.forEach(function(button){
    button.addEventListener("click",function(){

    let buttonValue = this.value;

    if(buttonValue == "C"){
        Num_String_sum = ''
        resultInput()
    }else if(buttonValue !== "="){
        Num_String_sum = Num_String_sum+buttonValue
    }
       inputSumF(Num_String_sum,buttonValue)
    })
})

function inputSumF(Num_String_sum,buttonValue) {
    
    let inputElement =document.getElementById("result")
    
    inputElement.textContent=Num_String_sum

    let finalValue = eval(Num_String_sum)
    if(buttonValue == "="){
        resultInput(finalValue)
    }
}
function resultInput(finalValue){
    let inputElement = document.getElementById("finalResult")
    inputElement.textContent =finalValue

}

// 키보드 이벤트
window.addEventListener('keydown',function(e){console.log(e)})
// buttons.forEach(function(button){
//     button.addEventListener("keydown",function(event){
//         console.log(event)
//         let buttonValue = this.value;
//         console.log(buttonValue)
//     })
// })