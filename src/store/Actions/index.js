export const fetchingRequest = type => ({type});
export const fetchingSuccess = (type, json, next) => ({
  type,
  payload: json,
  next,
});
export const fetchingFailure = (type, error) => ({type, payload: error});
export default {
  fetchingRequest,
  fetchingSuccess,
  fetchingFailure,
};
import { SignUp } from './Auth/SignIn';
import { SignIn } from './Auth/SignUp';
import { SignOut } from './Auth/SignOut';
import { UserAuth } from './Auth/UserAuth';

export {SignUp, SignIn, SignOut, UserAuth};

