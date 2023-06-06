import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Image, Switch, ScrollView } from 'react-native'
import React, {useState} from 'react'
import User from '../../assets/icons/girl.png';
import dropdown from "../../assets/icons/path.png";
import textbackground from "../../assets/icons/textbg.png";

// const bgimage = {uri: '/Users/maticztechnologies/Desktop/React-Native/mobile/bg.png'};

const Updatekyc = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
<SafeAreaView style={styles.userdetailpage}>
        <ImageBackground 
         source={require('../../assets/images/bg.png')}
         style={styles.bg}>
            <View style={{borderWidth:0.2, borderColor:'white'}}></View>
            <ScrollView style={{flex:1}}>
            <View style={styles.contents}>
            <Image
                style={{
                    width:75,
                    height:75,
                    marginTop:10,
                    borderRadius:999
                }}
                source={require('../../assets/images/person_image.jpeg')}
            />
            <Text style={{
                color:'white',
                fontSize:22,
                fontWeight:'bold',
                marginTop:10
            }}>David James</Text>
            <Text style={{
                color:'white',
                fontSize:14,
                fontWeight:'200',
                marginTop:10
            }}>username: David </Text>
            <Text style={{
                color:'white',
                fontSize:14,
                fontWeight:'200',
                marginTop:5
            }}>Email:mail@mail.com</Text>
            <View style={{
                    borderRadius:20,
                    backgroundColor:'#262A38',
                    paddingHorizontal:15,
                    paddingVertical:5,
                    marginTop:10           
            }}>
            <Text style={styles.id}>id:za235</Text>
            </View>
            <Text style={{
                color:'white',
                fontSize:14,
                fontWeight:'400',
                marginTop:10
            }}>Address : afaa479afs9469</Text>
            </View>
          
            <View>
            <ImageBackground 
                style={{
                    justifyContent:'center',
                    alignSelf:'center',
                    marginTop:10,
                    padding:10
            }}
                source={dropdown} resizeMode='stretch'> 
                <Text style={{
                    color:'white',
                }}>15.000 ZARC</Text>
            </ImageBackground>
            </View>
            <View style={styles.accounttype}>
            <ImageBackground
                style={{
                    flex:1.5,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    padding:20,
                    marginTop:45
                 }}
                source={dropdown} resizeMode='stretch'>
                    <ImageBackground style={{
                        flex: 0.15, justifyContent: 'center', alignItems: 'center'
                    }} source={textbackground}>
                     <Text style={{
                    color:'white',
                    backgroundColor:"transparent",
                }}>KYC</Text>
                    </ImageBackground>
                
                 <Text style={{
                    color:'white',
                    alignSelf:'center'
                }}>Bank</Text>
                <Text style={{
                    color:'white',
                    alignSelf:'center'
                }}>Crypto</Text>
                <Text style={{
                    color:'white',
                    alignSelf:'center'
                }}>Fiat</Text>
            </ImageBackground>
            </View>

            <View style={styles.container}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingVertical:15,
                    borderBottomColor:'white',
                }}>
                <Text style={{
                    color:'white',
                    fontSize:15,
                    fontWeight:'bold'
                }}>Update KYC
                    </Text>
      
                <ImageBackground 
                    style={{
                        justifyContent:'center',
                        alignSelf:'center',
                        paddingHorizontal:20,
                        paddingVertical:5,
                        }}
                    source={dropdown} resizeMode='stretch'>
                <Text style={{
                    color:'white',
                    padding:5
                }}>Apply</Text>
                </ImageBackground>
                </View>
                <Text style={{
                    color:'white',
                    marginTop:-20,
                    marginBottom:15,
                    fontWeight:'300'
                }}> status : pending</Text>
                <View style={{
                    width:"100%",
                    height:0.5,
                    backgroundColor:'gray'
                }}>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingVertical:5,
                    borderBottomColor:'white',
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:15,
                        fontWeight:'bold'
                    }}>2FA</Text>
                    <Switch
                        style={{
                            transform: [{scale: 0.7}]
                        }}
                         trackColor={{false: 'white', true: 'gray'}}
                        thumbColor= 'white'
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    /> 
                </View>
                <View style={{
                    alignContent:'center',
                }}>
                    <Text style={{
                        color:"white",
                        fontSize:13,
                        fontWeight:'300',
                    }}>Note: Scan the QR Code in the Google Authenticator app(install app from play stores/app stores) 
                    then enter the code that you see in the app in the text field and click confirm</Text>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    userdetailpage: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    bg:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10
    },
    contents:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    id:{
        color:'white',
        fontSize:14,
        fontWeight:'300',
    },
    accounttype:{
        flexDirection:'row',
        paddingHorizontal:5
    },
    container:{
        flexDirection:'column',
        width:'100%',
        marginTop:45,
        borderWidth:1,
        borderColor:'white',
        paddingHorizontal:15,
        paddingVertical:5
    }
})

export default Updatekyc