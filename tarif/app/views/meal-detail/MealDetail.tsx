import { Text, View,StyleSheet, Image } from 'react-native';
import useFetch from '@/app/fetch';
import SingleMeal from '@/app/components/SingleMeal';


export default function MealDetail(props:any) {

    const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+props.route.params.idMeal);
    const responseData : any = data;
    
    
    
    return (
        <View>
            <View style={styles.structure}>
                <Image style={styles.image} source={data?.meals[0].strMealThumb} width={100} height={100}/>
                <Text style={styles.text}>{data?.meals[0].strMeal}</Text>
                <Text style={{fontSize:18}}>{data?.meals[0].strArea}</Text>
            </View>
            <View style={{width:"100%",height:1,backgroundColor:"black",marginTop:3,marginBottom:3}}></View>
            <View style={styles.structure}>
                <Text style={{fontSize:16}}>{data?.meals[0].strInstructions}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      width:"100%",
      height:200,
      borderRadius:15
    },
    structure:{
        padding:10
    },
    text:{
        fontSize:24
    }
  });