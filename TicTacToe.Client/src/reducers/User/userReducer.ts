import { User } from '../../models/User';
import { UserActionTypes } from './userActionTypes';

// Define the initial state
export const userInitialState: User = { userName: '' };

// Define the actions
type UserAction =
  | { type: UserActionTypes.SET_USER_NAME; payload: string }
  | { type: UserActionTypes.RESET_FORM };

// Create the reducer function
export const userReducer = (state: User, action: UserAction): User => {
  switch (action.type) {
    case UserActionTypes.SET_USER_NAME:
      return { ...state, userName: action.payload };
    case UserActionTypes.RESET_FORM:
      return userInitialState;
    default:
      return state;
  }
};