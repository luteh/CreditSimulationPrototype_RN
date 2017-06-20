/**
 * Created by Luteh on 20/06/2017.
 */
import React from 'react'
import {View, Dimensions} from 'react-native'
import {Container, Content, Form, Item, Input, Label} from 'native-base'

const TextInputNB = ({children}) => {
    state = {text: ''};

    return (
    <View style={styles.containerStyle}>
        <Item floatingLabel>
            <Label>{children}</Label>
            <Input onChangeText={text => console.log(text)}/>
        </Item>
    </View>
    )
};

const width = Dimensions.get('window').width - 50;
const styles = {
    containerStyle:{
        width: width,
        marginBottom: 15
    }
};

export {TextInputNB}