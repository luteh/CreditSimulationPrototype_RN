/**
 * Created by Luteh on 20/06/2017.
 */
import React from 'react'
import {View, Dimensions} from 'react-native'
import {Button, Text} from 'native-base'

const ButtonNB = ({children}) => {
    return (
        <View style={styles.containerStyle}>
            <Button full light
                    onPress={() => console.log(`Button ${children} clicked!`)}
            >
                <Text>{children}</Text>
            </Button>
        </View>
    )
};

const width = Dimensions.get('window').width - 50;
const styles = {
    containerStyle: {
        width: width,
        marginBottom: 10
    }
};

export {ButtonNB}