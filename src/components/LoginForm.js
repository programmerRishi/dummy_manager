import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  // navigationOptions will be used in navigation file
  static navigationOptions = () => (
    {
       headerTitle: 'Please Login'
     }
  );

  onEmailChange(text) {
  this.props.emailChanged(text);
  }

  onPasswordChange(text) {
 this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, navigation } = this.props;// navigation contains the method navigate()
    console.log(navigation);
 this.props.loginUser({ email, password, navigation });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
      <CardSection>
      <Input
      label='Email'
      placeholder='email@example.com'
      onChangeText={this.onEmailChange.bind(this)}
      value={this.props.email}
      />
      </CardSection>

      <CardSection>
      <Input
      secureTextEntry
      label='Password'
      placeholder='password'
      onChangeText={this.onPasswordChange.bind(this)}
      value={this.props.password}
      />
      </CardSection>

      <Text style={styles.errorTextStyle}>
      {this.props.error}
      </Text>

      <CardSection>
      {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
     fontSize: 18,
      color: 'red',
       fontWeight: 'bold',
       alignSelf: 'center'
      }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged,
   passwordChanged,
    loginUser
   })(LoginForm);
