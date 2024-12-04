import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/input';
import ClassComponent from './Components/classComponent';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ClassComponent />
//   </StrictMode>,
  
// )

function App() {
  
  const [isTableShow, setIsTableShow] = useState(false);
  const [userInput, setUserInput] = useState({
    userData: "",
  })
  // console.log(userInput.userData);

  

  const Html = <div className=' flex justify-center items-center my-3'>
    <div className='min-w-52 max-h-64 px-3 py-3 border border-red-500 rounded-sm shadow-lg ' >
      <div className='px-2 bg-red-300 rounded-sm mb-2 hover:bg-blue-400'>
        <h1 className=' text-xl'>Hello this is a Html variable.</h1>
        <p>Use the Html variable into the return() statement.</p>
      </div>
      <div className='px-2 bg-red-300 rounded-sm mb-2 hover:bg-blue-400'>
        <h1 className=' text-xl'>Hello this is a Html variable.</h1>
        <p>Use the Html variable into the return() statement.</p>
      </div>
      <div className='px-2 bg-red-300 rounded-sm mb-2 hover:bg-blue-400'>
        <h1 className=' text-xl'>Hello this is a Html variable.</h1>
        <p>Use the Html variable into the return() statement.</p>
      </div>
    </div>
  </div>

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("userData").innerHTML = userInput.userData;
  }

  const toggleTable = () => {
    setIsTableShow((prev) => !prev);
  }
  

  return (
    <>
      {Html}
      <div className=' text-xl text-center border border-red-400 px-3 py-4 bg-red-300 hover:bg-blue-300'>
        This is the content that we write under the return method.
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className=" justify-center flex my-2">
          <Input className='border border-black rounded-sm' type='text' value={userInput.userData} placeholder='Enter data....' onChange={(e) => setUserInput({ userData: e.target.value })} />
        </div>
        <div className=" justify-center flex my-2">
          <Input className=' border-red-500 border px-3 py-1 bg-blue-400 hover:bg-red-400 rounded-sm text-white' type='submit' value='Submit' />
        </div>
        <div>
          <h1 className=' text-center'>UserData: <span id='userData'></span></h1>
        </div>
        <div>
          <h1 className=' text-center'>UserInput: {userInput.userData}</h1>
        </div>
      </form>
      <div className=' justify-center flex my-2'>
        <Input className=' border-red-500 border px-3 py-1 bg-blue-400 hover:bg-red-400 rounded-sm text-white' type='button' value={isTableShow ? 'Hide Table' : 'Show Table'} onClick={toggleTable}/>
      </div>
      { isTableShow ? (<div className=' justify-center flex '>
        <ClassComponent />
      </div>) : (<p className='text-center'>Click on button to show Table.</p>) }
    </>
  )
}

export default App
