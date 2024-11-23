
import React, {useState} from "react";
import "./app.css";

const Calculator = () => {

  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState();
  const [calculation, setCalc] = useState();

  const inputValue = (e) => {
    if(input === 0){
      setInput(e.target.value)
    }else{
      setInput(input + e.target.value)
    }
    if(input1){
      setInput2(input + e.target.value)
    }
  }

  const clearValue = (e) => {
    setInput(0)
    setResult(0)
    setInput1(0)
    setInput2(0)
    setCalc()
  }

  const add = () => {

    if(calculation === "+"){
      setResult(Number(input1) + Number(input2));
    }else{ 
      setCalc("+")
      setInput1(input)
      setInput(0)
    }
  }
  const subsract = (e) => {
    if(result){
      setCalc("-")
      setInput1(result)
      setInput(0)
    }else{
      setCalc("-")
      setInput1(input)
      setInput(0)
    }
  }
  const multiply = (e) => {
    if(result){
      setCalc("x")
      setInput1(result)
      setInput(0)
    }else{
      setCalc("x")
      setInput1(input)
      setInput(0)
    }
  }
  const devide = (e) => {
    if(result){
      setCalc("/")
      setInput1(result)
      setInput(0)
    }else{
      setCalc("/")
      setInput1(input)
      setInput(0)
    }
  }

  const equals = (e) => {
    setCalc("=")
  if(calculation === "+"){
    setResult(Number(input2) + Number(input1));
  }else if(calculation === "-"){
    setResult(Number(input1) - Number(input2));
  }else if(calculation === "x"){
    setResult(Number(input1) * Number(input2));
  }else if(calculation === "/"){
    setResult(Number(input1) / Number(input2));
  }

  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className='container'>
       
       <div id="display">{result > 0 ? result : input} <p>{calculation}</p></div>

      <div id="keys">
       <button onClick={equals} id="equals">=</button>

       <button onClick={clearValue} id="clear">Clear</button>

       <button id="decimal">.</button>

       <button onClick={add} className="function" value="+" id="add">+</button>
       <button onClick={subsract} className="function" id="subsract">-</button>
       <button onClick={multiply} className="function" id="multiply">x</button>
       <button onClick={devide} className="function" id="devide">/</button>

       <button onClick={inputValue} className="number" value={0} id="zero">0</button>
       <button onClick={inputValue} className="number" value={1} id="one">1</button>
       <button onClick={inputValue} className="number" value={2} id="two">2</button>
       <button onClick={inputValue} className="number" value={3} id="three">3</button>
       <button onClick={inputValue} className="number" value={4} id="four">4</button>
       <button onClick={inputValue} className="number" value={5} id="five">5</button>
       <button onClick={inputValue} className="number" value={6} id="six">6</button>
       <button onClick={inputValue} className="number" value={7} id="seven">7</button>
       <button onClick={inputValue} className="number" value={8} id="eight">8</button>
       <button onClick={inputValue} className="number" value={9} id="nine">9</button>


      </div>

       
      </div>
    </div>
  )
}



function App() {

  
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
