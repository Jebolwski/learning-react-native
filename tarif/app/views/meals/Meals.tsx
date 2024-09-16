import { Text, View,StyleSheet, Image } from 'react-native';


export default function Meals() {
    return (
        <View style={styles.structure}>
            <Text>sa meals as ben</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      width:80,
      height:50,
      borderRadius:35
    },
    structure:{
        display:"flex",
        flexDirection:"row",
        gap:16,
        alignItems:"center",
        borderWidth:1,
        borderColor:"gray",
        padding:5,
        margin:5,
        borderRadius:5,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        backgroundColor:"white"
    },
    text:{
        fontSize:22
    }
  });