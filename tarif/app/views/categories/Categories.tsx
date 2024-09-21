import { Image, StyleSheet, Text, View } from 'react-native';
import useFetch from '@/app/fetch';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoriesData } from '../interface/data';
import SingleCategory from '@/app/components/SingleCategory';
import { DataContext } from '@/app/context/DataContext';
import { useContext } from 'react';

export default function Categories() {
    const { user }:any = useContext(DataContext);

    const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    
    const responseData : CategoriesData = data;

    console.log(user);
    

    console.log(responseData);
    
    if(loading){
        return <Text>Loading...</Text>
    }
    
    if(error){
        return <Text>{error}</Text>
    }

    return (
        <View style={styles.structure}>
            <ScrollView>
            {responseData?.categories.map((category:any,index:number) => {
                return (
                    <SingleCategory category={category} key={index}  />
                );
            })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    structure:{
        backgroundColor:"orange"
    },
  });