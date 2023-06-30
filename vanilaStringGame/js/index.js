const 정답 = "APPLE";

let attempts = 0;
let index = 0;
let timer;
let keyColor =""
let keyBoardColor =""
function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:38%; background-color:white; width:200px; height:100px;";
    document.body.appendChild(div);

  
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
    clearInterval(timer);
  };

  const nextLine = () => {
    if (attempts === 6) return gameover();
    attempts += 1;
    index = 0;
  };

  const ColorKey = ()=>{
  window.addEventListener('keypress',function(event){
    if(event.key !== "Enter"){
      keyColor+=event.key.toUpperCase()
      const keyColorDivide = event.key.toUpperCase()
      if(정답.includes(keyColorDivide)){
        const block = document.querySelector(`.keyboard-column[data-key='${keyColorDivide}']`);
        block.style.background ="#6AAA64";
        //+애니메이션
      }else{
        const block = document.querySelector(`.keyboard-column[data-key='${keyColorDivide}']`);
        block.style.background ="red";
        // +애니메이션 
      } }})}

 
    
 

      const handleEnterKey = () => {
        let 맞은_갯수 = 0;
    
        for (let i = 0; i < 5; i++) {
          const block = document.querySelector(
            `.board-column[data-index='${attempts}${i}']`
          );
          
          const 입력한_글자 = block.innerText;
          const 정답_글자 = 정답[i];
          if (입력한_글자 === 정답_글자) {
            맞은_갯수 += 1;
            block.style.background = "#6AAA64";
            block.style.transition = 'background-color 1s ease-in-out';
            setTimeout(() => {
              element.style.backgroundColor = ''; // 원래 배경색으로 되돌리기
            }, 1000);
            
          } else if (정답.includes(입력한_글자)) block.style.background = "#C9B458";
          else{ block.style.background = "#787C7E";
          block.style.color = "white";
          block.style.transition = 'background-color 1s ease-in-out';
          setTimeout(() => {
            element.style.backgroundColor = ''; // 원래 배경색으로 되돌리기
          }, 1000);
    
        }
        }
    
        if (맞은_갯수 === 5) gameover();
        else nextLine();
      };
    




  const handleBackspace = () => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-column[data-index='${attempts}${index - 1}']`
      );
      preBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };



  const handleKeydown = (event) => {
    ColorKey()
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {

      thisBlock.innerText = key;

      index += 1;
    }
      
  };
  const ColorKeyboard = (onMouse)=>{
      if(onMouse !== "ENTER"){
        keyBoardColor+=onMouse
        const keyColorDivide = onMouse
        if(정답.includes(keyColorDivide)){
          const block = document.querySelector(`.keyboard-column[data-key='${keyColorDivide}']`);
          block.style.background ="#6AAA64";
          //+애니메이션
        }else if(onMouse !== "ENTER" && onMouse !=="BACK"){
          const block = document.querySelector(`.keyboard-column[data-key='${keyColorDivide}']`);
          block.style.background ="red";
          // +애니메이션 
        } 
      }

      }


  const handleOnClick = (event) => {
    const onMouse = event.target.dataset.key;
    ColorKeyboard(onMouse)
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );
    const onMouseCode = onMouse.charCodeAt(0);

    if(onMouse == "BACK")  handleBackspace(); 
    else if(onMouse == "ENTER") handleEnterKey();
      else if(65 <= onMouseCode && onMouseCode <= 90){

          thisBlock.innerText = onMouse;
          
          index += 1;

    }
  }

  

  const startTimer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
      const timeDiv = document.querySelector("#timer");
      timeDiv.innerText = `${분}:${초}`;
    }

    timer = setInterval(setTime, 1000);
  };

  startTimer();
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("click",handleOnClick)
}

appStart();


//키보드에도 동일하게 정답표시