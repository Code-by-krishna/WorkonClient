import React from 'react'

const Card = ({
  Src = "",
  Type = "",
  Discription = "",

}
) => {
  return (
    <div className='mx-10 my-10 '>
      <div className='bg-red-200 m-h-80 w-48 px-1 py-1 rounded-md border border-red-200 hover:bg-blue-400'>
        <img className=' w-44 h-28 ml-1 rounded-md' src={Src} alt="Nature img"  />
        <h3 className='ml-1 text-gray-600 mt-1'>{Type}</h3>
        <p className=' text-sm text-start ml-1'><strong>Discription: </strong>{Discription}</p>
      </div>
    </div>
  )
}

export default Card