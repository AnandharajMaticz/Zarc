import { View, Text, Modal, StyleSheet, Alert, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/styles'
import { myColors } from '../../assets/colors/colors'
import { BlurView } from '@react-native-community/blur'
const ForgotScreen = ({ visible, onhide }) => {
    const [inputValue, setInputValue] = useState();
    return (
        <View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => { Alert.alert('Modal has been closed.'); onhide(false); }}>
                   <View style={{ height: '100%' }}>
                    <BlurView
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        blurAmount={50}
                        blurRadius={2}
                        blurType="dark"
                        reducedTransparencyFallbackColor="black"
                    />
                    
                    <ImageBackground source={require('../../assets/images/login_bg.png')} style={myStyles.centeredView} resizeMode='stretch'>
                    <View style={{width:'90%', marginTop:20, alignItems:'center'}}>
                        <Text style={styles.headerTxtSty} >Forgot Password</Text>
                        <Text style={styles.innerHeater} marginTop={20}>Email</Text>
                        <TextInput placeholder='Enter Email' value={inputValue}
                            onChangeText={(txt) => setInputValue(txt)} style={styles.textInputSty} placeholderTextColor={myColors.lightWhite} />

                        <ImageBackground source={require('../../assets/images/dropdown.png')} resizeMode='stretch'
                            style={{ paddingVertical: 10, paddingHorizontal: 40, marginTop: 40, marginBottom: 80 }}>
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </ImageBackground>
                    </View>
                    </ImageBackground>
                    </View>
            </Modal>

        </View>

    )
}

const myStyles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
       
    },
    pwdViewSty: {
        backgroundColor: 'transparent',
        width: "100%",
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    blueUnderLineText: {
        color: myColors.lightBlue,
        textDecorationLine: 'underline',

    }
})

export default ForgotScreen;