import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state={ 
    email: '', 
    password: '', 
    error: '', 
    loading: false, 
  };

  onButtonPress() {
    const {email, password } = this.state;
    this.setState({ error: '', loading: true });

    alert(`email is: ${email} and password is: ${password}`);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Text style = {styles.errorTextStyle}>
            {this.state.error}
          </Text>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}

export default LoginForm;