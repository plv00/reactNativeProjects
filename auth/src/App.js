import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyADVaowKx8s2AqkC6gFDOM2S6m2rC_Zg3Y",
                authDomain: "authreactnativeudemy-8ae88.firebaseapp.com",
                databaseURL: "https://authreactnativeudemy-8ae88.firebaseio.com",
                projectId: "authreactnativeudemy-8ae88",
                storageBucket: "authreactnativeudemy-8ae88.appspot.com",
                messagingSenderId: "1085070991891"
              });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <CardSection>
                            <Button onPress={() => firebase.auth().signOut()} >
                                Log Out
                            </Button>
                        </CardSection>
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
        
    }

    render() {
        return (
            <View>
                <Header headerText ="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}



export default App;