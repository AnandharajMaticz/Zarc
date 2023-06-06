import { View, Text, Modal, StyleSheet, Alert, ImageBackground, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { myColors } from '../../assets/colors/colors';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotScreen from '../screens/ForgotScreen';
import { useTogglePasswordVisibility } from '../screens/useTogglePasswordVisibility ';
import { BlurView } from '@react-native-community/blur';

const LoginScreen = ({ visible, onhide }) => {
    const [registerVisible, setRegisterVisible] = useState(false);
    const [forgotVisible, setForgotVisible] = useState(false);
    const [inputValue, setInputValue] = useState({
        usertName: '',
        password: '',
    })
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    const handleInput = (txt, key) => {
        const nameOfInput = txt;
        setInputValue({ ...inputValue, [key]: nameOfInput });
    }
    const createAccClick = () => {
        onhide(false);
        setRegisterVisible(true);
    }
    const forgotClick = () => {
        onhide(false);
        setForgotVisible(true);
    }
    return (

        <View>
            <RegisterScreen visible={registerVisible} onhide={setRegisterVisible} />
            <ForgotScreen visible={forgotVisible} onhide={setForgotVisible} />

            <Modal
                animationType="slide"
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
                        <Text style={styles.headerTxtSty}>Login</Text>
                        <Text style={styles.innerHeater}>Username</Text>
                        <TextInput placeholder='Enter name' value={inputValue.firstName}
                            onChangeText={(txt) => handleInput(txt, 'userName')}
                            style={styles.textInputSty}
                            placeholderTextColor={myColors.lightWhite} />

                        <Text style={styles.innerHeater} marginTop={20}>Password</Text>
                        <View style={myStyles.pwdViewSty}>
                            <TextInput
                                placeholder='Enter password'
                                value={inputValue.firstName}
                                onChangeText={(txt) => handleInput(txt, 'password')}
                                style={{ flex: 1, color: 'white' }}
                                secureTextEntry={passwordVisibility}
                                placeholderTextColor={myColors.lightWhite} />
                            <MaterialIcons name={rightIcon} size={24} color="white" onPress={handlePasswordVisibility} />
                        </View>

                        <Text style={myStyles.blueUnderLineText} alignSelf='flex-end' marginTop={5} onPress={forgotClick}>Forgot Password</Text>
                        <Pressable >
                            <ImageBackground source={require('../../assets/images/dropdown.png')} resizeMode='contain'
                                style={{ paddingVertical: 10,  marginTop: 30 }} >
                                <Text style={{ color: 'white', alignSelf:'center' }}>Submit</Text>
                            </ImageBackground>
                            <Text style={myStyles.blueUnderLineText} alignSelf='center' marginTop={10} marginBottom={80}
                                onPress={createAccClick}>Create Account</Text>
                        </Pressable>

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
        padding: 5
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: '100%'
    }
})

export default LoginScreen;