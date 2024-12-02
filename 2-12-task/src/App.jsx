import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const myData = { Name: "Amit Kumar", Workas: "Software developer" }
  const myData1 = { Name: "Kiran", Workas: "Software developer" }

  const [count, setCount] = useState(0);
  const [name, setName] = useState({ Name: "Mohit Saini", Workas: "Software developer" });

  const handleClick = () => {
    setCount(count + 1);
    if (count === 0) {
      setName(myData);
    }else if(count === 1) {
      setName(myData1)
    }
  }

  return (
    <div>
      <button className='px-6 py-1 bg-blue-600 rounded-md text-white mb-4' onClick={handleClick}>{count}</button>
      <h1>{`Click no: ${count}`}</h1>
      <p>{`My name is : ${name.Name},  Work as ${name.Workas}`}</p>
    </div>
  )
}

export default App
