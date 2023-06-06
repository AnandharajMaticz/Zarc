import { View, Text, SafeAreaView, TextInput, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native'
import User from '../../assets/icons/girl.png';
import React from 'react'
import button from "../../assets/icons/deposit_popup.png";
import submit from "../../assets/icons/path.png";
import Icon from 'react-native-vector-icons/Ionicons'

const Profile = () => {
  const [firstname, onChangeText0] = React.useState('');
  const [lastname, onChangeText1] = React.useState('');
  const [email, onChangeText2] = React.useState('');
  const [country, onChangeText3] = React.useState('');
  const [password, onChangeText4] = React.useState('');
  const [createpassword, onChangeText5] = React.useState('');
  const [retype, onChangeText6] = React.useState('');

  return (
    <SafeAreaView style={styles.app}>
      <ImageBackground
        source={button} // image should be changed
        style={styles.bg} resizeMode='stretch'>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 35,
            marginHorizontal: -55,
          }}>
            <View
              style={{
                flexDirection: 'row'
              }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                }}
                source={User}
              />
              <View style={{
                flexDirection: 'column'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>  David james</Text>
                <Text style={{
                  color: 'white',
                  fontWeight: '300'
                }}>  David james </Text>
              </View>
            </View>
            <Icon name='close-outline' size={30} color='gray'></Icon>
          </View>
          <ScrollView style={styles.scrollView} bounces={false}>
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              First Name
            </Text>
            <TextInput
              placeholder='David'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText0}
              value={firstname}
            />
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              Last Name
            </Text>
            <TextInput
              placeholder='James'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText1}
              value={lastname}
            />
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              Email
            </Text>
            <TextInput
              placeholder='mail@mail.com'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText2}
              value={email}
            />
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              Country
            </Text>
            <TextInput
              placeholder='Europe'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText3}
              value={country}
            />
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              Current Password
            </Text>
            <TextInput
              placeholder='***********'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText4}
              value={password}
            />
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              Create Password
            </Text>
            <TextInput
              placeholder='Select'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText5}
              value={createpassword}
            />
            <Text style={{
              color: 'white',
              marginLeft:15
            }}>
              Retype New Password
            </Text>
            <TextInput
              placeholder='***********'
              placeholderTextColor='gray'
              style={styles.input}
              onChangeText={onChangeText6}
              value={retype}
            />
            <ImageBackground style={{
              alignSelf:'center',
              paddingHorizontal:25,
              paddingVertical:10,
              marginTop:20
            }}
            source={submit} resizeMode='stretch'>
              <Text style={{
                color:'white'
              }}>Submit</Text>
            </ImageBackground>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    alignItems:'stretch'
  },
  bg: {
    width:'100%',
    height:'100%',
    marginTop:'50%',
  },
  scrollView: {
    width:'100%',
    height:'55%',
    alignSelf:'center',
    marginTop:'10%',
    paddingBottom:-50
  },
  input: {
    color:'white',
    height: 40,
    margin: 10,
    borderColor:'gray',
    borderRadius:5,
    borderWidth: StyleSheet.hairlineWidth,
    padding:5
  },

})


export default Profile