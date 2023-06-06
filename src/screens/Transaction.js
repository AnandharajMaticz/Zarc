import { View, Text, SafeAreaView, ImageBackground, ScrollView, StyleSheet, Image, FlatList } from 'react-native'
import React, { useState} from 'react'
import { myColors } from '../../assets/colors/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Transaction = () => {

  const [currency, setCurrency] = useState([
    { currency:'BTC', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'USD', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'GMP', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'EURO', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'USDT', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'}
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("../../assets/images/bg.png")} style={{ height: '100%', width: "100%" }}>
        <ScrollView style={{ paddingHorizontal: 0, marginBottom:20 }}>
          <View>
          <View style={{ borderWidth: 0.2, borderColor: 'white' }}></View>
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Transaction</Text>
          <Text style={myStyles.depositSty}>History</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <Image source={require('../../assets/icons/grap_icon.png')} />
            <Text style={{ color: '#7ACF0E', }}>45%<Text style={{ color: 'white' }}>  This week</Text></Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
            <ImageBackground style={{width:110,flexDirection:'column', alignSelf:'center', paddingHorizontal:20, paddingVertical:20, marginTop:30}} resizeMode='stretch' source={require('../../assets/images/image_box_select.png')}>
            <Image source={require('../../assets/icons/deposit.png')} style={{width:30, height:30, alignSelf:'center'}}></Image>
              <Text style={{color:'white', alignSelf:'center', marginTop:15}}>Withdraw</Text>
            </ImageBackground>

            <ImageBackground style={{width:110, flexDirection:'column', alignSelf:'center', paddingHorizontal:20, paddingVertical:20, marginTop:30}} resizeMode='stretch' source={require('../../assets/images/image_box.png')}>
            <Image source={require('../../assets/icons/deposit.png')} style={{width:30, height:30, alignSelf:'center'}}></Image>
              <Text style={{color:'white', alignSelf:'center', marginTop:15}}>Exchange</Text>
            </ImageBackground>

            <ImageBackground style={{width:110, flexDirection:'column', alignSelf:'center', paddingHorizontal:20, paddingVertical:20, marginTop:30}} resizeMode='stretch' source={require('../../assets/images/image_box.png')}>
            <Image source={require('../../assets/icons/deposit.png')} style={{width:30, height:30, alignSelf:'center'}}></Image>
              <Text style={{color:'white', alignSelf:'center', marginTop:15}}>Deposit</Text>
            </ImageBackground>
            </View>


            <ImageBackground source={require('../../assets/icons/pg_icon.png')}
            style={{margin:10, paddingVertical:30, paddingHorizontal:15}} resizeMode='stretch'>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{color:'white'}}>From</Text>
                <View style={{borderColor:'white', borderWidth:0.2, borderRadius:2.5, marginLeft:5, flexDirection:'row', alignItems:'center', padding:5}}>
                  <Text style={{color: myColors.grayLight}}>DD/MM/YYYY</Text>
                  <MaterialIcons name="date-range" size={30} color="gray" />
                </View>

                <Text style={{color:'white', marginLeft:5}}>To</Text>
                <View style={{borderColor:'white', borderWidth:0.2, borderRadius:2.5, marginLeft:5, flexDirection:'row', alignItems:'center', padding:5}}>
                  <Text style={{color: myColors.grayLight}}>DD/MM/YYYY</Text>
                  <MaterialIcons name="date-range" size={30} color="gray" />
                </View>

              </View>
            </ImageBackground>



            <View style={{borderColor:'white', borderWidth:0.5, margin:10, padding:10}}>
              <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Portfolio Status</Text>
                <ImageBackground source={require('../../assets/images/dropdown.png')} style={{alignSelf:'center', paddingHorizontal:30, paddingVertical:10}} resizeMode='stretch'>
                 <Text style={{ color:'white'}}>Search</Text>
                </ImageBackground>
              </View>
              <FlatList
              style={{marginTop:20, marginBottom:20}}
              data={currency}
              renderItem={({item}) =>(
                <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:10}}>
                  <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <Image source={require('../../assets/images/currency_image.png')} style={{width:30, height:30, borderRadius:999}}></Image>
                    <Text style={{color:'white', marginLeft:5, width:40}}>{item.currency}</Text>
                  </View>
                  <Text style={{color:'white'}}>{item.balance}</Text>
                  <Text style={{color:'white'}}>{item.time}</Text>
                  <Text style={{color:'green', borderColor:'green', borderWidth:2, padding:5, textAlign:'center', borderRadius:5}}>{item.status}</Text>
                  <Image source={require('../../assets/icons/ic_arrow_red.png')} style={{width:30, height:30}}></Image>
                </View>
                
              )}></FlatList>
            </View>
            </View>
        </ScrollView>

      </ImageBackground>


    </SafeAreaView>

  )
}

const myStyles = StyleSheet.create({
  depositSty: {
    color: 'white',
    fontWeight: '900',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Transaction