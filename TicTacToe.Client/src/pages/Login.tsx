import '../css/index.css';
import '../css/Login.css';
import TicTacToeImage from '../assets/TicTacToe.png';
import { useState, FormEvent } from 'react';

function Login() {
  const [userName, setUserName] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`User Name ${userName}`)
  }


  return (
    <>
      <div className="login-page-container">
        <h1 className='login-page-header'>Account Info</h1>
      </div>
      <div className='login-container'>
        <div className='left-half-page'>
          <img className='tic-tac-toe-image' src={TicTacToeImage} alt="TicTacToe" />
        </div>
        <div className='right-half-page'>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className='login-form-label'>
                <h1>Log in</h1>
              </div>
              <div className='form-group'>
                <label htmlFor="user-name-input">User Name: </label>
                <input 
                  type="email" 
                  name="userName" 
                  id="user-name-input"
                  placeholder='Username/Email'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)} // Update state on input change
                  required />
              </div>
              <div className='form-group'>
                <button type='submit' className='submit-up-button'>Log in</button>
              </div>
              <div className='form-group'>
                <div className='sign-up-button-container'>
                  <label htmlFor="sign-up-button">New here? <br />Sign up for a new account: </label>
                  <button type='button' className='sign-up-button'>Sign up</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login;
