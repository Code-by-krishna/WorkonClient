import { useEffect, useMemo, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [data, setData] = useState([]);
  console.log(data);

  const items = [
    {name: "Amit", age: 25},
    {name: "Mahak", age: 22},
    {name: "Mohit", age: 25}
  ]

  const calculateAge = useMemo(() => {
    return items.reduce((total,item) => {
      total + item.age, 0
    })
  },[items]);

  try {
    useEffect(() => {

      const getData = async () => {
        // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response1 = await response.json();
        console.log(response1.slice(0,10));
        setData(response1.slice(0,10));
        // setData(response.data.slice(0, 10));
      }
      getData();

    }, [])
  } catch (error) {
    console.log(error);

  }

  return (
    <>
      <div>
      <div>{calculateAge}</div>
        <table className='table-auto w-full border-collapse border border-gray-400 mt-6'>
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">UserId</th>
              <th className="border border-gray-400 px-4 py-2">Title</th>
              <th className="border border-gray-400 px-4 py-2">Body</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.title}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.body}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
