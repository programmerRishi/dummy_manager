import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
render() {
  const { name, shift, phone } = this.props;
  return (
       <View>
        <CardSection>
        <Input
        label='Name'
        placholder='Rishi'
        value={name}
        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
        />
        </CardSection>

        <CardSection>
          <Input
          label='Phone'
          placholder="+91 xxxxxxxxxx"
          value={phone}
          onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }} >
        <Text style={styles.shiftLabelStyle}>Shift</Text>

        <Picker
        selectedValue={shift}
        onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
        >

        <Picker.Item label='Monday' value='Monday' />
        <Picker.Item label='Tuesday' value='Tuesday' />
        <Picker.Item label='Wednesday' value='Wednesday' />
        <Picker.Item label='Thursday' value='Thursday' />
        <Picker.Item label='Friday' value='Friday' />
        <Picker.Item label='Saturday' value='Saturday' />
        <Picker.Item label='Sunday' value='Sunday' />

        </Picker>

        </CardSection>
        </View>


  );
}
}
const styles = {
  shiftLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = (state) => {
 const { name, shift, phone } = state.employeeForm;
 console.log(state.employeeForm);
 return { name, shift, phone };
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
