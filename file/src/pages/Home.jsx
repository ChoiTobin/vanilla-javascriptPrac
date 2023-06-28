import React from 'react'
import "./Home.css";
import {useState} from 'react';

export const Home = () => {
    const [sum,setSum] = useState('')
    const [result,setResult] = useState('')
    

    const handleNumClick = (event) => {
        const buttonValue = event.target.value; // 클릭된 버튼의 value 값 가져오기
            setSum(sum + buttonValue) 
            console.log(sum)
        };

        const handleCalClick = () => {
            try {
               let remove = eval(sum);
                setResult(remove) 
            } catch (error) {
              console.log('잘못된 수식입니다.');
            }
          };

    const handleRemoveClick = () => {
        setResult('')
        setSum('')

    }
      
    return (
    <div className='Home-body'>
        <div className='Home-Cal'>
            <div className='Cal-Result'>{result}</div>
            <div className='Cal-input'>{sum}</div>
                <div>
                    <div>
                        <button value="=" onClick={handleCalClick}>=</button>
                        <button value="/" onClick={handleNumClick}>/</button>
                        <button value="*" onClick={handleNumClick}>X</button>
                        <button value="A/C" onClick={handleRemoveClick}>C</button>
                    </div>
                    <div>

                        <button value={1} onClick={handleNumClick}>1</button>
                        <button value={2} onClick={handleNumClick}>2</button>
                        <button value={3} onClick={handleNumClick}>3</button>
                        <button value={0} onClick={handleNumClick}>0</button>
                    </div>
                    <div>    
                        <button value={4} onClick={handleNumClick}>4</button>
                        <button value={5} onClick={handleNumClick}>5</button>
                        <button value={6} onClick={handleNumClick}>6</button>
                        <button value="-" onClick={handleNumClick}>-</button>
                    </div>
                    <div>
                        <button value={7} onClick={handleNumClick}>7</button>
                        <button value={8} onClick={handleNumClick}>8</button>
                        <button value={9} onClick={handleNumClick}>9</button>
                        <button value="+" onClick={handleNumClick}>+</button>
                    </div>
                 </div>       
        </div>
    </div>
  )
}


// 하나씩 지우기 + 리덕스 +  