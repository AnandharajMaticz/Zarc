import React, { useState} from 'react';
import { Image, StyleSheet, View, ImageBackground, SafeAreaView, StatusBar, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons'


import Screen1 from '../src/screens/Home';
import Screen2 from '../src/screens/Deposit';
import Home from '../src/screens/Home';
import Deposit from '../src/screens/Deposit';
import Exchange from '../src/screens/Exchange'
import Transaction from '../src/screens/Transaction';
import Profile from '../src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../src/screens/LoginScreen';

// Import other screens as needed

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const [loginVisible, setLoginVisible] = useState(true);
  return (
    <NavigationContainer>
       <LoginScreen visible={loginVisible} onhide={setLoginVisible} />
    <ImageBackground style={{flex:1, resizeMode: 'cover',}} source={require('../assets/images/bg.png')}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}> </StatusBar>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 }}>

            <View style={{ flexDirection: 'row', borderEndWidth: 0.5, borderEndColor: 'white' }}>
              <Image source={require('../assets/images/person_image.jpeg')} style={{ borderRadius: 9999, width: 40, height: 40, alignSelf: 'center', margin: 10 }}></Image>
              {/* <View style={{borderColor:'white', borderWidth:0.3, marginLeft:10}}></View> */}
            </View>

            <Text style={{ color: 'white', alignSelf: 'center' }}>BALANCE: ZARC 800</Text>

            <View style={{ justifyContent: 'space-evenly', borderLeftWidth: 0.5, borderLeftColor: 'white', padding: 10 }}>
              <Text style={{ position: 'absolute', right: 7, marginTop: 10, borderRadius: 999, color: 'white', width: 17, height: 17, backgroundColor: 'white', color: 'black', textAlign: 'center', }}>1</Text>
              <IonIcons name="ios-notifications-outline" size={30} color="white" alignSelf="center" alignItems="center"></IonIcons>
            </View>
          </View>
      <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarBackground: () => (
            <ImageBackground source={require('../assets/images/menubar-bg.png')} style={{ flex: 1,
              backgroundColor:'black',  marginVertical:-10, marginHorizontal:-35}} />
          ),
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = focused
                ? require('../assets/icons/ic_home.png')
                : require('../assets/icons/ic_home.png');
            } else if (route.name === 'Deposit') {
              iconSource = focused
                ? require('../assets/icons/deposit.png')
                : require('../assets/icons/deposit.png');
            }else if (route.name === 'Exchange') {
                iconSource = focused
                  ? require('../assets/icons/ic_exchange.png')
                  : require('../assets/icons/ic_exchange.png');
              }
              else if (route.name === 'Transaction') {
                iconSource = focused
                  ? require('../assets/icons/ic_transaction.png')
                  : require('../assets/icons/ic_transaction.png');
              }
              else if (route.name === 'Profile') {
                iconSource = focused
                  ? require('../assets/icons/ic_profile.png')
                  : require('../assets/icons/ic_profile.png');
              }

            return <Image source={iconSource} style={styles.tabIcon} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="Deposit" component={Deposit} options={{ tabBarLabel: 'Deposit' }} />
        <Tab.Screen name="Exchange" component={Exchange} options={{ tabBarLabel: 'Exchange' }} />
        <Tab.Screen name="Transaction" component={Transaction} options={{ tabBarLabel: 'Transaction' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
        {/* Add more Tab.Screen components for additional screens */}
      </Tab.Navigator>
      </SafeAreaView>
    </ImageBackground>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default TabNavigator;
