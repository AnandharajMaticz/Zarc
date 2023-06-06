import { View, Text, SafeAreaView, Image, ImageBackground, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Withdraw = () => {

  const [currency, setCurrency] = useState([
    { currency: 'BTC', balance: '+$53.45', data: '45%' },
    { currency: 'USD', balance: '+$53.45', data: '45%' },
    { currency: 'GMP', balance: '+$53.45', data: '45%' },
    { currency: 'EURO', balance: '+$53.45', data: '45%' },
    { currency: 'USDT', balance: '+$53.45', data: '45%' }
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("../../assets/images/bg.png")} style={{ height: '100%', width: "100%" }}>
        <View style={{ borderWidth: 0.2, borderColor: 'white' }}></View>

        <ScrollView style={{ paddingHorizontal: 0, marginBottom: 20 }}>
          <View style={{flex:1}}>
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Crypto</Text>
          <Text style={myStyles.depositSty}>Exchange</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
            <Image source={require('../../assets/icons/grap_icon.png')} />
            <Text style={{ color: '#7ACF0E', }}>45%<Text style={{ color: 'white' }}>This week</Text></Text>
          </View>

       
            <ImageBackground resizeMode='stretch' style={{marginHorizontal:10, marginTop:20}} source={require('../../assets/icons/pg_icon.png')}>
             
              <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
              
              <View style={{flexDirection:'row', width:"70%", justifyContent:'space-between', marginTop:20, borderColor:'white', borderWidth:0.2, marginLeft:10, marginBottom:10, padding:10}}>
                  <Text style={{color:'white'}}>Please enter here</Text>
                  <Text style={{color:'white'}}>Max</Text>            
              </View>
             
              <ImageBackground source={require('../../assets/icons/pg_icon.png')} style={{marginHorizontal:'auto',  padding:10, marginTop:20, marginBottom:10, marginHorizontal:5}} resizeMode='stretch'>
                <Text style={{color:'white', width:65}}>USD</Text>
                </ImageBackground>
              </View>
            
            <Text style={{color:'white', alignSelf:'center', marginBottom:30}}>Balance : 0.00</Text>

            </ImageBackground>
           
            <Image source={require('../../assets/icons/ic_arrow_up_down.png')} size={30} style={{marginTop:-15, alignSelf:'center'}}></Image>


            <ImageBackground resizeMode='stretch' style={{marginHorizontal:10, marginTop:20}} source={require('../../assets/icons/pg_icon.png')}>
             
             <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
             
             <View style={{flexDirection:'row', width:"70%", justifyContent:'space-between', marginTop:20, borderColor:'white', borderWidth:0.2, marginLeft:10, marginBottom:10, padding:10}}>
                 <Text style={{color:'white'}}>Please enter here</Text>
                 <Text style={{color:'white'}}>Max</Text>            
             </View>
            
             <ImageBackground source={require('../../assets/icons/pg_icon.png')} style={{marginHorizontal:'auto',  padding:10, marginTop:20, marginBottom:10, marginHorizontal:5}} resizeMode='stretch'>
               <Text style={{color:'white', width:65}}>USD</Text>
               </ImageBackground>
             </View>
           
           <Text style={{color:'white', alignSelf:'center', marginBottom:30}}>Balance : 0.00</Text>

           </ImageBackground>
          
           <Image source={require('../../assets/icons/ic_arrow_right.png')} size={30} style={{marginTop:-15, alignSelf:'center'}}></Image>


          <View style={{ margin: 10, padding: 10, borderWidth: 0.2, borderColor: 'white', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 10 }}> Note : Fiat - USD, ZAR, YEN, ZARC  CRypto Coin - ZARC, BTC, ETH, BNB, USDT </Text>
          </View>


          <ImageBackground source={require('../../assets/icons/pg_icon.png')} resizeMode='stretch' style={{ margin: 10, paddingHorizontal: 20, paddingTop: 20 }}>

            <FlatList
              style={{ marginTop: 5, marginBottom: 20 }}
              data={currency}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/currency_image.png')} style={{ width: 30, height: 30, borderRadius: 999 }}></Image>
                    <Text style={{ color: 'white', marginLeft: 10 }}>{item.currency}</Text>
                  </View>
                  <Text style={{ color: 'white' }}>{item.balance}</Text>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('../../assets/icons/grap_icon.png')}></Image>
                  <Text style={{ color: 'green', fontWeight:'bold'}}>{item.data}</Text>
                  </View>
                 
                </View>
              )}></FlatList>
          </ImageBackground>
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
    fontFamily:'Bungee-Regular'
  },
});
export default Withdraw