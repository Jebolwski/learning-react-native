import { Text, View,StyleSheet, Image, Touchable, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function SingleMeal(props:any) {

    const navigation = useNavigation();
        
    return (
        <TouchableHighlight>
            <View style={styles.structure}>
                <Text style={styles.text}>{props.meal.strMeal}</Text>
            </View>
        </TouchableHighlight>
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