import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
    <Stack key='root'>

    <Scene key='auth' headerMode='none'>
    <Scene key='login' component={LoginForm} title='Please Login' />
    </Scene>

    <Scene key='main'>
    <Scene key='employeeList' component={EmployeeList} title='EmployeeList' />
    </Scene>

    </Stack>
    </Router>
  );
};
export default RouterComponent;
