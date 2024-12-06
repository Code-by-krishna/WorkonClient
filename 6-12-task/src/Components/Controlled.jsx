import React, { useState } from 'react'

const Controlled = () => {

    const [data, setData] = useState({
        Fullname: "",
        Email: "",
        Password: "",
    });
    console.log(data);


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

    }

    return (
        <div className='mr-10'>
            <div>
                <h1 className=' font-medium text-3xl my-4'>Controlled Components in Reactjs</h1>
            </div>
            <div>
                <form className=' text-start' onSubmit={handleSubmit}>
                    <label htmlFor="name">Fullname: </label><br />
                    <input className='w-100 h-8 border border-black rounded-lg' value={data.Fullname} type="text" id='name' name='Fullname' placeholder='Enter your name..' onChange={handleChange} /><br /><br />
                    <label htmlFor="email">Email: </label><br />
                    <input className='w-100 h-8 border border-black rounded-lg' value={data.Email} type="email" id='email' name='Email' placeholder='Enter your email..' onChange={handleChange} /><br /><br />
                    <label htmlFor="password">Password: </label><br />
                    <input className='w-100 h-8 border border-black rounded-lg' value={data.Password} type="password" id='password' name='Password' placeholder='Enter your password..' onChange={handleChange} /><br /><br />
                    <input className=' bg-blue-500 px-4 py-2 rounded-lg border border-black text-white' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Controlled