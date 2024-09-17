import { Text, View,StyleSheet, ScrollView } from 'react-native';
import useFetch from '@/app/fetch';
import SingleMeal from '@/app/components/SingleMeal';


export default function Meals(props:any) {

    const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+props.route.params.category);
    const responseData : any = data;
    
    return (
        <View style={styles.structure}>
            <ScrollView>
            {data?.meals.map((meal:any,index:number) => {
                return (
                    <SingleMeal meal={meal} key={index}  />
                );
            })} 
            </ScrollView>
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