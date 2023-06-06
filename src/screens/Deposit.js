import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Switch,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dropdown } from 'react-native-element-dropdown';
import QRCode from 'react-native-qrcode-svg';
import { myColors } from '../../assets/colors/colors';

const data = [
    { label: 'to your USDC wallet address (ERC 20) 1', value: '1' },
    { label: 'to your USDC wallet address (ERC 20) 2', value: '2' },
    { label: 'to your USDC wallet address (ERC 20) 3', value: '3' },
    { label: 'to your USDC wallet address (ERC 20) 4', value: '3' },
    { label: 'to your USDC wallet address (ERC 20) 5', value: '3' },
    { label: 'to your USDC wallet address (ERC 20) 6', value: '3' },
];

const Deposit = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isFocus, setIsFocus] = useState(false);
    const [selectItem, setSelectItem] = useState(null);


    return (
        <SafeAreaView style={myStyles.container}>
            
            <ImageBackground source={require("../../assets/images/bg.png")} style={{ height: '100%', width: "100%" }}>
               <View style={{borderWidth:0.2, borderColor:'white'}}></View>
                <ScrollView style={{ paddingHorizontal: 10 }}>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Payment</Text>
                    <Text style={myStyles.depositSty}>Deposit</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                        <Image source={require('../../assets/icons/grap_icon.png')} />
                        <Text style={{ color: '#7ACF0E', }}>45%<Text style={{ color: 'white' }}>  This week</Text></Text>
                    </View>

                    <ImageBackground resizeMode='stretch' style={{ paddingTop: 30, paddingBottom: 45, paddingHorizontal: 15, marginTop: 20 }}
                        source={require('../../assets/icons/pg_icon.png')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                            <Text style={{ color: 'white', fontSize: isEnabled ? 15 : 18, fontWeight: isEnabled ? "300" : "900" }}>Fiat</Text>
                            <Switch
                                trackColor={{ false: 'gray', true: 'gray' }}
                                thumbColor={isEnabled ? 'white' : 'white'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={{ color: 'white', fontSize: isEnabled ? 18 : 15, fontWeight: isEnabled ? "900" : "300" }}>Crypto</Text>
                        </View>

                        {!isEnabled ? (
                            <View>
                                <Text style={{ color: '#a1a1a1', fontWeight: "900", marginTop: 20 }}>Please Notes</Text>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>Important: Deposit only from a bank account in your name.</Text>
                                </View>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>No cash. No Cheques, Only EFTs accepted.</Text>
                                </View>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>Don't deposit the same amount more than once per day</Text>
                                </View>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>South African bank accounts only for deposits and withdrawals.</Text>
                                </View>
                            </View>
                        ) : (
                            <>
                                <View style={{ alignSelf: 'center', marginTop: 20 }}>
                                    <QRCode value="Send Me the Value" />
                                </View>
                                <Text style={{ color: myColors.lightWhite, marginTop: 20, fontWeight: '500' }}>Deposit funds to your USDC Wallet</Text>
                                <Dropdown
                                    style={[myStyles.dropdown, isFocus && { borderColor: 'white' }]}
                                    placeholderStyle={{ color: myColors.lightWhite, fontSize: 14 }}
                                    selectedTextStyle={{ color: myColors.lightWhite, fontSize: 12 }}
                                    itemTextStyle={{ fontSize: 12 }}
                                    data={data}
                                    // search
                                    // searchPlaceholder="Search..."
                                    maxHeight={200}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select one...' : '...'}
                                    value={selectItem}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setSelectItem(item.value)
                                    }}
                                />
                                <Text style={{ color: myColors.lightWhite, marginTop: 20, fontWeight: '500' }}>Deposit funds to your USDC Wallet</Text>
                                <Dropdown
                                    style={[myStyles.dropdown, isFocus && { borderColor: 'white' }]}
                                    placeholderStyle={{ color: myColors.lightWhite, fontSize: 14 }}
                                    selectedTextStyle={{ color: myColors.lightWhite, fontSize: 12 }}
                                    itemTextStyle={{ fontSize: 12 }}
                                    data={data}
                                    // search
                                    // searchPlaceholder="Search..."
                                    maxHeight={200}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select one...' : '...'}
                                    value={selectItem}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setSelectItem(item.value)
                                    }}
                                />
                            </>
                        )}
                    </ImageBackground>

                    <ImageBackground style={{ paddingTop: 30, paddingBottom: 25, paddingHorizontal: 15, marginTop: 25, alignItems: 'center', marginBottom: 15 }}
                        resizeMode='stretch' source={require('../../assets/icons/pg_icon.png')}>
                        {!isEnabled ? (
                            <>
                                <Text style={{ color: '#a1a1a1', fontWeight: "900", fontSize: 16, alignSelf: 'flex-start' }}>Bank Transfer</Text>
                                <View style={myStyles.refCodeSty}>
                                    <Text style={{ color: myColors.lightWhite, flex: 1 }}>Ref code : <Text>ZARCGSOV3</Text></Text>
                                    <Image source={require('../../assets/icons/copy_icon.png')} />
                                </View>
                                <ImageBackground source={require('../../assets/images/dropdown.png')} resizeMode='stretch'
                                    style={{ marginTop: 30 }} >
                                    <Text style={{ color: myColors.lightWhite, paddingVertical: 10, paddingHorizontal: 30 }}>View Details</Text>
                                </ImageBackground>
                            </>
                        ) : (
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={{ color: '#a1a1a1', fontWeight: "900", marginTop: 20, alignSelf: 'flex-start' }}>Please Notes</Text>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>Send only ZARC to this deposit address. Sending any other coins or tokens to this address may result in a loss of your funds.</Text>
                                </View>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>Don't send coin on any other chain expect ERC20 to this address.</Text>
                                </View>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>Coin will be deposited immediately after 2 network confirmations</Text>
                                </View>
                                <View style={myStyles.notesSty}>
                                    <MaterialIcons name="check-circle-outline" size={20} color="gray" />
                                    <Text style={myStyles.notesInnerTxt}>After making a deposit, you must submit the transaction hash here.</Text>
                                </View>
                                <ImageBackground source={require('../../assets/images/dropdown.png')} resizeMode='stretch'
                                    style={{ marginTop: 30 }} >
                                    <Text style={{ color: myColors.lightWhite, paddingVertical: 10, paddingHorizontal: 30 }}>Submit</Text>
                                </ImageBackground>
                            </View>
                        )}
                    </ImageBackground>
                    </View>
                </ScrollView>
            </ImageBackground>
           
        </SafeAreaView>
    );
}

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    depositSty: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 10,
        fontFamily:'Chakra-Semi'
    },
    notesSty: {
        flexDirection: 'row',
        marginTop: 10,
    },
    notesInnerTxt: {
        color: 'gray',
        flex: 1,
        marginStart: 10,
        fontSize: 13
    },
    refCodeSty: {
        borderColor: myColors.lightWhite,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    dropdown: {
        borderColor: myColors.lightWhite,
        borderWidth: 0.7,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5
    },
});

export default Deposit;
