import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    const { employee } = this.props;
    this.props.navigation.navigate('employeeEdit', { employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
    <View>
    <CardSection>

    <Text style={styles.nameStyle}>
    {name}
    </Text>

   </CardSection>
   </View>
   </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  nameStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
};
const mapStateToProps = (state) => {
  return { navigation: state.employees.navigation };
};

export default connect(mapStateToProps, null)(ListItem);
