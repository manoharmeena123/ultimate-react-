import React from 'react'
import { useState } from 'react'
function Step() {
 
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] =useState(false);
  const handlePrevious =()=>{
    if(step > 1) setStep((s)=> s-1);
  }

  const handleNext =()=>{
    if(step<3) {
      setStep((s)=> s+1)
      // setStep((s)=> s+1)
    };
    // setTest({name:"Manohar"});
  }
  return (
    <>
      <button className='close' onClick={()=> setIsOpen((isOpen)=>!isOpen)}>&times</button>
       {isOpen && ( <div className="steps">
      <div className='numbers'>
        <div className={step >=1 ? 'active':''}>1</div>
        <div className={step >=2 ? 'active':''}>2</div>
        <div className={step >=3 ? 'active':''}>3</div>
      </div>

      <p className='message'>Hello ,{}</p>
      <div className='buttons'>
        <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious}>Previous</button>
      <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
      </div>
        
    </div>)}
    </>
   
  );
}


export const App = () => {
  return (
    <div>
      <Step/>
      <Step/>
      </div>
  )
}

export default App;
