import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


//LoginScreen Navigator component
const LoginScreen = StackNavigator({
    authform: {
      screen: LoginForm,
  }
}
);
// EmployeeScreen Navigator component
const EmployeeListScreen = StackNavigator({
    eList: {
      screen: EmployeeList
                        },

    employeeCreate: {
       screen: EmployeeCreate
                        },
   employeeEdit: {
     screen: EmployeeEdit
                        }
                  }
                );


// This is the main Router component which will be rendered
const RouterComponent = StackNavigator({
  auth: {
    screen: LoginScreen
                    },
  employeeList: {
    screen: EmployeeListScreen
                      }
                                  },

    {
        headerMode: 'none'
    }
);
export { RouterComponent };
