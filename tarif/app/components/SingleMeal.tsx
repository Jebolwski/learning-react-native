import { Text, View,StyleSheet, Image, Touchable, TouchableHighlight } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function SingleMeal(props:any) {

    const navigation = useNavigation();
        
    

    return (
        <TouchableHighlight onPress={()=>navigation.navigate("views/meal-detail/MealDetail", { idMeal: props.meal.idMeal })}>
            <View style={styles.structure}>
                <Image source={props.meal.strMealThumb}  style={{width:"100%",height:180}} /> 
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
        borderColor:"gray",
        borderWidth:1,
        borderRadius:5,
        marginTop:10
    },
    text:{
        fontSize:22,
        padding:5
    }
  });