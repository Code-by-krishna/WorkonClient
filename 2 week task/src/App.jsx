import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [newData, setNewData] = useState({
    id: "",
    userId: "",
    title: "",
    completed: false,
  });
  const [UserData, setUserData] = useState([]);
  const [InputField, setInputField] = useState(false);

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setUserData(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching active users:', error);
      }
    };

    fetchActiveUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const findUser = UserData.find(user => user.id === userId); // Fixed the user search
      if (findUser) {
        setUserData(prevUsers => prevUsers.filter(user => user.id !== userId));
        alert('User has been deleted');
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (userId) => {
    try {
      const findUser = UserData.find(user => user.id === userId);
      if (findUser) {
        setUserData(prevData =>
          prevData.map(user =>
            user.id === userId ? { ...user, completed: !user.completed } : user
          )
        );
        alert('User status updated.');
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    try {
      const newId = UserData.length ? UserData[UserData.length - 1].id + 1 : 1;
      const newEntry = { ...newData, id: newId };
      setUserData([...UserData, newEntry]);
      setNewData({ userId: '', id: '', title: '', completed: false });
      setInputField(false);
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <>
      <div className='mb-10'>
        <h1 className="text-center text-2xl font-bold my-4">TODO LIST</h1>

        {UserData.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-400 mt-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">Title</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
                <th className="border border-gray-400 px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((user) => (
                <tr className="text-center" key={user.id}>
                  <td className="border border-gray-400 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.title}</td>
                  <td className="border border-gray-400 px-4 py-2" >
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => handleUpdate(user.id)}
                    >
                      {user.completed ? "Completed" : "Not Completed"}
                    </button>
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">Data not found!!</p>
        )}

        <div className='flex items-center justify-center'>
          <button onClick={() => setInputField(!InputField)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ">
            {InputField ? 'Close' : 'ADD New Data'}
          </button>
        </div>

        
        {InputField && (
          <div className=' text-center flex justify-center '>
            <input
              type="text"
              placeholder="Enter User ID"
              value={newData.userId}
              onChange={(e) => setNewData({ ...newData, userId: e.target.value })}
              className="mt-2 border p-2 mx-4"
            />
            <input
              type="text"
              placeholder="Enter Title"
              value={newData.title}
              onChange={(e) => setNewData({ ...newData, title: e.target.value })}
              className="mt-2 border p-2 mr-2"
            />
            <label className="mt-2 mr-5">
              Completed:
              <input
                className='ml-4'
                type="checkbox"
                checked={newData.completed}
                onChange={(e) => setNewData({ ...newData, completed: e.target.checked })}
              />
            </label>
            <button onClick={handleAdd} className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Submit
            </button>
          </div>

        )}
      </div>
    </>
  )
}

export default App;
