import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleDouble =()=>{
     
    setCount (count *2);
    return;
  }
 
  const handleAdd =()=>{
     
    setCount (count + 1);
  }
  const handleSub =()=>{

   setCount (count- 1);
 }

  return (
 <div className="App">
      <h3 className={`${count % 2=== 0 ? "green":"red"}`}>Count:{count}</h3>
      <button onClick={handleAdd}>Add1</button>
      <button onClick={handleSub}>Sub1</button>
      <button onClick={handleDouble}>Double x2</button>
    </div>
     
  )
}


// function App(){
//   const [count,setCounter]=useState(0);
  
//    const handleChange=(value)=>{
//      setCounter(count + value)
//    }
//    const handleDouble=(value)=>{
//     setCounter(count * value)
//   }
//   if(count >=1000){
//     return <h4>Counter reached maximum value</h4>
//   }
 

//   return (
//     <div className="App">
//       <h3 className={`${count % 2=== 0 ? "green":"red"}`}>Counter:{count}</h3>
//       <button onClick={()=>{handleChange(+1)}}>Add1</button>
//       <button onClick={()=>{handleChange(-1)}}>Sub1</button>
//       <button onClick={()=>{handleDouble(2)}}>Double x2</button>
       
//     </div>
//   );
// }

export default App
