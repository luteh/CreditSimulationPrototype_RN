/**
 * Created by Luteh on 20/06/2017.
 */
import React from 'react';
import {Image} from 'react-native';
import {Container, Header, Body, Title, Left, Right} from 'native-base';
const ImageHeader = () => {
        return (
                <Header style={{marginBottom: 50}}>
                    <Body>
                    <Image
                        style={styles.imageHeaderStyle}
                        resizeMode={'stretch'}
                        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/cb/ec/47/cbec47f045c3d4bcb2b7e1a1ec6a08e5.jpg'}}
                    />
                    </Body>
                </Header>
        );
};

const styles = {
    imageHeaderStyle: {
        width: 100,
        height: 40,
        alignSelf: 'center'
    }
};

export {ImageHeader};