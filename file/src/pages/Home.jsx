import React from 'react'
import "./Home.css";
import {useState} from 'react';
import { useEffect } from 'react';

export const Home = () => {
  const [sum, setSum] = useState('');
  const [result, setResult] = useState('');
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [result]);
 
  const handleNumClick = (event) => {
      const buttonValue = event.target.innerText;
      setSum(prevSum => prevSum + buttonValue);
  };
  
  const handleCalClick = () => {
      try {
          let calculationResult = eval(sum);
          setResult(calculationResult);
      } catch (error) {
          console.log('잘못된 수식입니다.');
      }
  };
  
  const handleKeyDown = (e) => {

      if (e.key === "Enter") {
        handleCalClick()
      } else {
        setSum((prevSum) => prevSum + e.key);
      }
        
    
};

  
  const handleRemoveClick = () => {
      setResult('');
      setSum('');
  };


    
  return (
      <div className='Home-body'>
          <div className='Home-Cal'>
              <div className='Cal-Result'>{result}</div>
              <div className='Cal-input'>{sum}</div>
              <div>
                  <div>
                      <span data-value="=" onClick={handleCalClick}>=</span>
                      <span data-value="/" onClick={handleNumClick}>/</span>
                      <span data-value="*" onClick={handleNumClick}>*</span>
                      <span data-value="A/C" onClick={handleRemoveClick}>C</span>
                  </div>
                  <div>
                      <span data-value={1} onClick={handleNumClick}>1</span>
                      <span data-value={2} onClick={handleNumClick}>2</span>
                      <span data-value={3} onClick={handleNumClick}>3</span>
                      <span data-value={0} onClick={handleNumClick}>0</span>
                  </div>
                  <div>    
                      <span data-value={4} onClick={handleNumClick}>4</span>
                      <span data-value={5} onClick={handleNumClick}>5</span>
                      <span data-value={6} onClick={handleNumClick}>6</span>
                      <span data-value="-" onClick={handleNumClick}>-</span>
                  </div>
                  <div>
                      <span data-value={7} onClick={handleNumClick}>7</span>
                      <span data-value={8} onClick={handleNumClick}>8</span>
                      <span data-value={9} onClick={handleNumClick}>9</span>
                      <span data-value="+" onClick={handleNumClick}>+</span>
                  </div>
              </div>       
          </div>
      </div>
  );
}
