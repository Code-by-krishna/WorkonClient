import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Components/Child1'
import { Provider } from './ContextApi/context'


function App() {
  const [data, setData] = useState([]);
  console.log(data);
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const result = await response.json();
      // console.log(result.slice(0,10))
      setData(result.slice(0,2))
    }
    getData();
  },[])

  return (
    <>
      <Provider value={data}>
      <div>
        <Child1 data = {data}/>
      </div>
      </Provider>
    </>
  )
}

export default App
