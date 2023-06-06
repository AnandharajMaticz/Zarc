import { View, Text, Modal, StyleSheet, Alert, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/styles';
import { myColors } from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

const RegisterScreen = ({ visible, onhide }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [inputValue, setInputValue] = useState({
        usertName: '',
        email: '',
        phoneNumber: '',
        password: '',
        conPassword: '',
    })

    const handleInput = (txt, key) => {
        const nameOfInput = txt;
        setInputValue({ ...inputValue, [key]: nameOfInput });
    }
    const alreadyAccClick = () => {
        onhide(false)
    }
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => { Alert.alert('Modal has been closed.'); onhide(false); }}>

                <View style={myStyles.centeredView}>
                    <Text style={styles.headerTxtSty}>Register</Text>
                    <Text style={styles.innerHeater} marginTop={20}>Username</Text>
                    <TextInput placeholder='Enter Name' value={inputValue.firstName}
                        onChangeText={(txt) => handleInput(txt, 'userName')} style={styles.textInputSty}
                        placeholderTextColor={myColors.lightWhite} />

                    <Text style={styles.innerHeater} marginTop={20}>Email</Text>
                    <TextInput placeholder='Enter Email' value={inputValue.firstName}
                        onChangeText={(txt) => handleInput(txt, 'email')} style={styles.textInputSty}
                        placeholderTextColor={myColors.lightWhite} />

                    <Text style={styles.innerHeater} marginTop={20}>Phonenumber</Text>
                    <TextInput placeholder='Enter Number' value={inputValue.firstName}
                        onChangeText={(txt) => handleInput(txt, 'phoneNumber')} style={styles.textInputSty}
                        placeholderTextColor={myColors.lightWhite} />

                    <Text style={styles.innerHeater} marginTop={20}>Password</Text>
                    <View style={myStyles.pwdViewSty}>
                        <TextInput placeholder='Enter password' value={inputValue.firstName}
                            onChangeText={(txt) => handleInput(txt, 'password')} style={{ flex: 1, color: 'white' }} placeholderTextColor={myColors.lightWhite} />
                        <MaterialIcons name="visibility" size={24} color="white" style={{}} />
                    </View>

                    <Text style={styles.innerHeater} marginTop={20}>Retype Password</Text>
                    <View style={myStyles.pwdViewSty}>
                        <TextInput placeholder='Enter password' value={inputValue.firstName}
                            onChangeText={(txt) => handleInput(txt, 'conPassword')} style={{ flex: 1, color: 'white' }} placeholderTextColor={myColors.lightWhite} />
                        <MaterialIcons name="visibility" size={24} color="white" style={{}} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColors={toggleCheckBox ? "red" : 'yellow'}
                        />

                        <Text style={{ color: 'white', flex: 1, fontSize: 13 }}>I accept and agree to the
                            <Text style={myStyles.blueUnderLineText}> terms
                                <Text style={{ color: 'white', textDecorationLine: 'none' }}> and
                                    <Text style={myStyles.blueUnderLineText}> Privacy Policy</Text></Text></Text></Text>

                        {/* <Text style={{ color: 'white' }}>I accept and agree to the </Text>
                        <Text style={myStyles.blueUnderLineText}>terms </Text>
                        <Text style={{ color: 'white', textDecorationLine: 'none' }}>and </Text>
                        <Text style={myStyles.blueUnderLineText}> Privacy Policy</Text> */}
                    </View>
                    <ImageBackground source={require('../../assets/images/dropdown.png')} resizeMode='stretch'
                        style={{ paddingVertical: 10, paddingHorizontal: 40, marginTop: 30 }}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </ImageBackground>
                    <Text style={myStyles.blueUnderLineText} alignSelf='center' marginTop={25} marginBottom={80}
                        onPress={alreadyAccClick}>Already have an account?</Text>
                </View>
            </Modal>
        </View>
    )
}

const myStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#rgba(0, 0, 0, 0.8)',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
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
    },
    checkbox: {
        alignSelf: 'center',
    },
})

export default RegisterScreen;