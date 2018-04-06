import firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
    } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
          dispatch({ type: EMPLOYEE_CREATE });
          navigation.navigate('employeeList');
                    }
                );
          };
};

export const employeeFetch = (navigation) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    // snapshot is the not the actual data or array of data.
    // snapshot is an object which can get us access to the data.
    // for getting the data use .val() method
     .on('value', snapshot => {
       dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val(), extra: navigation });
     });
  };
  // first argument in .on() method is the event in this case 'value'
  // for further reference visit -- https://firebase.google.com/docs/database/web/lists-of-data
}; 

export const employeeSave = ({ name, phone, shift, uid, navigation }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      navigation.navigate('employeeList');
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
    });
  };
};

export const employeeDelete = ({ uid, navigation }) => {
  const { currentUser } = firebase.auth();

   return (dispatch) => {
     firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
     .remove()
     .then(() => {
       dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
       navigation.navigate('employeeList');
     });
   };
};
