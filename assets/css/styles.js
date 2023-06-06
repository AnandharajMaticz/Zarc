import { StyleSheet } from 'react-native';

const transparent = 'transparent';
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  headerTxtSty:{
    color:'white',
    fontSize:22,
    fontWeight:'900',
  },
  innerHeater:{
    color:'white',
    alignSelf:'flex-start',
    fontWeight:'600'
  },
  textInputSty:{
    backgroundColor:transparent,
     width: "100%" ,
     borderWidth:1,
     borderColor:'white',
     marginTop:5,
     paddingHorizontal:15,
     color:'white',
  }
});

export default styles;