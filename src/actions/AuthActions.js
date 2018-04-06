import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
   PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER,

   } from './types';


export const emailChanged = (text) => {
  return (
    {
      type: EMAIL_CHANGED,
      payload: text

    }
  );
};

export const passwordChanged = (text) => {
  return (
    {
      type: PASSWORD_CHANGED,
      payload: text

    }
  );
};

export const loginUser = ({ email, password, navigation }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user, navigation))
  .catch((error) => {
    console.log(error);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user, navigation))
    /* if we call loginUserFailed(dispatch) without a call back function
     then we will get the red screen with error message --- c.call is not a function.

     .catch(loginUserFailed(dispatch)) // gives error -- callBack function not defined

     .catch(() => loginUserFailed(dispatch)); // correct
    */
    .catch(() => loginUserFailed(dispatch));
       }
       );
                 };
                    };

const loginUserFailed = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILED });
};

const loginUserSuccess = (dispatch, user, navigation) => {
  dispatch(
    {
  type: LOGIN_USER_SUCCESS,
  payload: user
    }
    );
    // Actions.main();
navigation.navigate('employeeList');
};
