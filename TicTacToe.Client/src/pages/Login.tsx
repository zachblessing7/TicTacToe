import '../css/index.css';
import '../css/Login.css';
import TicTacToeImage from '../assets/tictactoe.png';
import { useReducer, FormEvent } from 'react';
import { userReducer, userInitialState } from '../reducers/User/userReducer';
import { UserActionTypes } from '../reducers/User/userActionTypes';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [user, dispatch] = useReducer(userReducer, userInitialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`User Name ${user.userName}`);
    // UpperCase UserName 
    let upperUserName
    upperUserName= user.userName.toUpperCase();
    user.userName = upperUserName !== '' ? upperUserName : user.userName

    // Ensure it exists in the DB
    

    // Send User Object to backend
    

    // Reset the form
    dispatch({type: UserActionTypes.RESET_FORM});
  }

  // If Signing Up Direct to the Sign Up Page
  const handleSignUp = () => {
    navigate('/signup');
  }


  return (
    <>
      <div className="login-page-container">
        <h1 className='login-page-header'>Account Info</h1>
      </div>
      <div className='login-container'>
        <div className='left-half-page'>
          <div className='tic-tac-toe-image-container'>
            <img className='tic-tac-toe-image' src={TicTacToeImage} alt="TicTacToe" />
          </div>
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
                value={user.userName}
                onChange={(e) => dispatch({type: UserActionTypes.SET_USER_NAME, payload: e.target.value})} // Update state on input change
                required />
            </div>
            <div className='form-group'>
              <button type='submit' className='login-button'>Log in</button>
            </div>
            <div className='form-group'>
              <div className='sign-up-button-container'>
                <label htmlFor="sign-up-button">New here? <br />Sign up for a new account: </label>
                <button type='button' className='sign-up-button' onClick={handleSignUp}>Sign up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
