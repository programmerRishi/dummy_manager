import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  // this navigationOptions is transported to the navigation file i dont know how..
static navigationOptions = ({ navigation }) => (
  {
  headerTitle: 'EmployeeList',

  headerRight: (
  <Button
  title="Add"
  color='#000000'
  onPress={() => navigation.navigate('employeeCreate')}
  />
  )
 }
);

componentWillMount() {
  const { navigation } = this.props;
  console.log(navigation);
  this.props.employeeFetch(navigation);
  this.createDataSource(this.props);
}

componentWillReceiveProps(nextProps) {
  /* nextProps are the new set of props that this component is going to be
  rendered with.
  this.props is still the old set of props
  */
  this.createDataSource(nextProps);
}
createDataSource({ employees }) {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.dataSource = ds.cloneWithRows(employees);
}


render() {
  console.log(this.props);
  return (
    <ListView
    enableEmptySections
    dataSource={this.dataSource}
    renderRow={(employee) => <ListItem employee={employee} />}
    />
  );
}

}
const mapStateToProps = (state) => {
  console.log(state);
  // here state.employees is the object of all employees.
  // uid is the unique id of each employee,
  // val is the object of name, phone and shift of the  employee with uid.
  // eg. -----    kd12h434h3433: { name: 'rishi', phone: '7317686155', shift: 'Monday'}
  // in this eg. uid is: kd12h434h3433; and val is-- { name: 'rishi', phone: '7317686155', shift: 'Monday'}
  const employees = _.map(state.employees, (val, uid) => {
    // in map(state.employee, ( val, uid)) uid is the key and val is the value.
    return { ...val, uid };//{ name: 'rishi', phone: '7317686155', shift: 'Monday', uid: 'kd12h434h3433'}
  });
  return { employees };// employees is an array of all the objects returned by the _.map
};


export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
