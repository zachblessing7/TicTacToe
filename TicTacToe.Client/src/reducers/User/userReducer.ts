import { UserViewModel } from '../../viewModels/UserViewModel';
import { UserActionTypes } from './userActionTypes';

// Define the initial state
export const userInitialState: UserViewModel = { id: 0, displayName: '' };

// Define the actions
type UserAction =
  | { type: UserActionTypes.SET_USER_NAME; payload: string }
  | { type: UserActionTypes.RESET_FORM };

// Create the reducer function
export const userReducer = (state: UserViewModel, action: UserAction): UserViewModel => {
  switch (action.type) {
    case UserActionTypes.SET_USER_NAME:
      return { ...state, displayName: action.payload };
    case UserActionTypes.RESET_FORM:
      return userInitialState;
    default:
      return state;
  }
};