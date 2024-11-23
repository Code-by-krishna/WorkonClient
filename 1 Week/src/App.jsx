import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setdata] = useState({
    Fullname: "",
    Email: "",
    Password: "",
    Pnumber: "",
  })

  const [IsSubmit, setIsSubmit] = useState(false);
  const [Error, setError] = useState({});
  const [popupMessage, setPopupMessage] = useState(''); 
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  // console.log(Object.keys(Error));

  useEffect(() => {
    if (Object.keys(Error).length === 0 && IsSubmit) {
      setPopupMessage(
        `Fullname: ${data.Fullname}\n` +
        `Email: ${data.Email}\n` +
        `Password: ${data.Password}\n` +
        `Pnumber: ${data.Pnumber}`
      );      
      setIsPopupVisible(true); 
    }
  }, [Error]);


  const SubmitData = (e) => {
    e.preventDefault();
    setError(ValidateFormData(data));
    setIsSubmit(true);
  }

  const ValidateFormData = (Formdata) => {

    // console.log(Formdata);
    const error = {};
    const EmailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@gmail\.com$/;
    const PnumberRegex = /^\d+$/;
    const PasswordRegex = /^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/-]*$/;


    if (!Formdata.Fullname.trim()) {
      error.Fullname = 'Name is Required'
    }

    if (!Formdata.Email.trim()) {
      error.Email = 'Email is Required'
    }
    else if (!EmailRegex.test(Formdata.Email)) {
      error.Email = "Use format [0-9][a-z][A-Z]@gmail.com";
    }

    if (!Formdata.Password.trim()) {
      error.Password = 'password is Required'
    }
    else if (Formdata.Password.length <= 6 || Formdata.Password.length >= 12) {
      error.Password = 'Password must bhi of 6 to 12 characters';
    }
    else if (!PasswordRegex.test(Formdata.Password)) {
      error.Password = "Password is invalid";
    }

    if (!Formdata.Pnumber.trim()) {
      error.Pnumber = 'phone number is Required'
    }
    else if (Formdata.Pnumber.length != 10) {
      error.Pnumber = 'Phone number must be 10 digits.';
    }
    else if (!PnumberRegex.test(Formdata.Pnumber)) {
      error.Pnumber = 'Invalid input! Only digits are allowed.';
    }

    return error;

  }

  const closePopup = () => {
    setIsPopupVisible(false); 
  };

  return (

    <div className='flex justify-center items-center h-[100vh] '>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-window">
            <p>{popupMessage}</p>
            <button onClick={closePopup} className="btn btn-secondary">Close</button>
          </div>
        </div>
      )}

      <div className=' bg-blue-200 rounded-lg border border-blue-600 px-20   py-8'>
        <form onSubmit={(e) => SubmitData(e)}>
          {/* {!IsSubmit ? <div className='mb-6'>{JSON.stringify(data, undefined, 2)}</div> : <p className=' font-semibold text-red-700 text-2xl mb-6'>Sucessfully Submit</p>} */}
          <div className='mb-5 text-2xl font-sans font-bold text-blue-500'>Form Data</div>
          <label htmlFor="name">Fullname</label><br />
          <input className='p-1 bg-gray-200 rounded-lg' type='text' id='name' name='name' placeholder='Enter your name..' onChange={(e) => setdata({ ...data, Fullname: e.target.value })} /><br></br>
          <p className=' text-left  text-red-500'>* {Error.Fullname}</p>
          <label htmlFor="email">Email</label><br />
          <input className='p-1 bg-gray-200 rounded-lg' type='text' id='email' name='email' placeholder='Enter your email..' onChange={(e) => setdata({ ...data, Email: e.target.value })} /><br></br>
          <p className=' text-left text-red-500'>* {Error.Email}</p>
          <label htmlFor="password">Password</label><br />
          <input className='p-1 bg-gray-200 rounded-lg' type='password' id='password' name='password' placeholder='Enter your password..' onChange={(e) => setdata({ ...data, Password: e.target.value })} /><br></br>
          <p className=' text-left text-red-500'>* {Error.Password}</p>
          <label htmlFor="tel">Phone number</label><br />
          <input className='p-1 bg-gray-200 rounded-lg' type='tel' id='tel' name='tel' placeholder='Enter your number..' onChange={(e) => setdata({ ...data, Pnumber: e.target.value })} /><br></br>
          <p className='mb-2 text-left text-red-500'>* {Error.Pnumber}</p>
          <input type='submit' value="Submit" className='bg-blue-500 w-[190px] rounded-lg p-1 text-white font-semibold' />
        </form>
      </div>
    </div>
  )
}

export default App
