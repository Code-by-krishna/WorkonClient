import React, { useRef } from 'react'
import { use } from 'react';

const UnControlled = () => {

    const Fullname = useRef(null);
    const Email = useRef(null);
    const Password = useRef(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Fullname: Fullname.current.value,
            Email: Email.current.value,
            Password: Password.current.value
        }
        console.log(data);
        
    }
    

  return (
    <div>
        <div>
            <h1 className=' font-medium text-3xl my-4'>UnControlled Components in Reactjs</h1>
        </div>
        
        <div>
            <form className=' text-start' onSubmit={handleSubmit}>
                <label htmlFor="name1">Fullname: </label><br />
                <input ref={Fullname} className='w-100 h-8 border border-black rounded-lg' type="text" id='name1' placeholder='Enter your name..'/><br /><br />
                <label htmlFor="email1">Email: </label><br />
                <input ref={Email} className='w-100 h-8 border border-black rounded-lg' type="email" id='email1' placeholder='Enter your email..'/><br /><br />
                <label htmlFor="password1">Password: </label><br />
                <input ref={Password} className='w-100 h-8 border border-black rounded-lg' type="password" id='password1' placeholder='Enter your password..'/><br /><br />
                <input className=' bg-blue-500 px-4 py-2 rounded-lg border border-black text-white' type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default UnControlled