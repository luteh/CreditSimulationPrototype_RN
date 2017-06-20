/**
 * Created by Luteh on 20/06/2017.
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {ImageHeader, TextInputNB, ButtonNB} from "./common";
import {Container, Content, Form} from 'native-base'

class LoginScreen extends Component {
    render() {
        return (
            <Container >
                <ImageHeader/>
                <Content style={styles.containerStyle}>
                    <TextInputNB>
                        Email
                    </TextInputNB>
                    <TextInputNB>
                        Password
                    </TextInputNB>
                    <ButtonNB>
                        Login
                    </ButtonNB>
                    <Text onPress={console.log('Forgot Password Clicked')}>Forgot Password</Text>
                    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
                        <Text>Belum punya akun?</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text onPress={() => console.log('Register Clicked!')}>
                                Register
                            </Text>
                            <Text> disini </Text>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = {
    containerStyle: {
        alignSelf: 'center'
    }
};
export default LoginScreen