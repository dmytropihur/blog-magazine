import axios from "axios";
import {
  REGISTRATION_STARTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from "../actionTypes";

export const userRegister = payload => {
 return async dispatch => {
   
  //  console.log(payload);
   dispatch(registrationStarted());

   try {
     await axios.post(`${process.env.REACT_APP_DATABASE_URL}/auth/registration`, payload)
     .then(response => response.data)
     dispatch(registrationSuccess());
    } catch (err) {
      dispatch(registrationError(err));
    }
 }
}


export const registrationStarted = () => {
	return {
		type: REGISTRATION_STARTED,
	}
}
export const registrationSuccess = () => {
	return {
		type: REGISTRATION_SUCCESS,
	}
}
export const registrationError = payload => {
	return {
		type: REGISTRATION_ERROR,
		payload,
	}
}