import { Text, View,StyleSheet, Image, Touchable, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function SingleCategory(props:any) {

    const navigation = useNavigation();
        
    return (
        <TouchableHighlight  onPress={()=>navigation.navigate("views/meals/Meals", { category: props.category.strCategory })}>
            <View style={styles.structure}>
                <Image source={props.category.strCategoryThumb} style={styles.image} width={100} height={100} />
                <Text style={styles.text}>{props.category.strCategory}</Text>
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