import React from 'react'
import "./Home.css";
import {useState} from 'react';
import { useEffect } from 'react';

export const Home = () => {
    const [sum,setSum] = useState('')
    const [result,setResult] = useState('')
    
    useEffect(()=>{
        window.addEventListener("keydown",handleKeyDown)
    })


    const handleNumClick = (event) => {
        console.log(event)
        const buttonValue = event.target.innerText; 
        // span은 event.target.value X 
 
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
    
    const handleKeyDown = (e)=> {
        console.log(e)
    }

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
                        <span value="=" onClick={handleCalClick}>=</span>
                        <span value="/" onClick={handleNumClick}>/</span>
                        <span value="*" onClick={handleNumClick}>*</span>
                        <span value="A/C" onClick={handleRemoveClick}>C</span>
                    </div>
                    <div>
                        <span onChange={handleKeyDown} value={1} onClick={handleNumClick} >1</span>
                        <span value={2} onClick={handleNumClick}>2</span>
                        <span value={3} onClick={handleNumClick}>3</span>
                        <span value={0} onClick={handleNumClick}>0</span>
                    </div>
                    <div>    
                        <span value={4} onClick={handleNumClick}>4</span>
                        <span value={5} onClick={handleNumClick}>5</span>
                        <span value={6} onClick={handleNumClick}>6</span>
                        <span value="-" onClick={handleNumClick}>-</span>
                    </div>
                    <div>
                        <span value={7} onClick={handleNumClick}>7</span>
                        <span value={8} onClick={handleNumClick}>8</span>
                        <span value={9} onClick={handleNumClick}>9</span>
                        <span value="+" onClick={handleNumClick}>+</span>
                    </div>
                 </div>       
        </div>
    </div>
  )
}


// 하나씩 지우기 + 리덕스 +  