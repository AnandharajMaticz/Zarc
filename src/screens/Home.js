import { View, Text, ImageBackground, Image, SafeAreaView, FlatList, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { StatusBar, Dimensions  } from 'react-native'
import { SearchBar } from 'react-native-screens'
import { LineChart } from 'react-native-chart-kit'

const Home = () => {

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 5,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const [currency, setCurrency] = useState([
    { currency:'BTC', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'USD', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'GMP', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'EURO', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'},
    { currency:'USDT', balance:'+$53.45', time:'06:24:45', status:'COMPLETED'}
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <StatusBar backgroundColor={'black'}></StatusBar>
      <ScrollView> 
     <View>
      <View style={{ flex: 1 }}>
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/bg.png')}>

          <View style={{ borderBottomColor: 'white', borderBottomWidth: 0.5 }}></View>

          <ImageBackground style={{alignSelf:'center', paddingHorizontal:30, paddingVertical:10, marginTop:30}} resizeMode='stretch' source={require('../../assets/images/dropdown.png')}>
              <Text style={{color:'white'}}>Zarc</Text>
            </ImageBackground>
            <Text style={{color:'white', alignSelf:'center', marginTop:10, fontSize:18}}>My Total Balance</Text>
            <Text style={{color:'white', alignSelf:'center', marginTop:5, fontSize:40, fontWeight:'bold', fontFamily:'Rajdhani-Bold'}}>$ 6500.00</Text>
            <Text style={{color:'white', alignSelf:'center', marginTop:10, fontSize:12}}>45% This Week</Text>

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

            <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    marginTop={10}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#000000",
      backgroundGradientFrom: "#000000",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

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

        </ImageBackground>

       

      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home