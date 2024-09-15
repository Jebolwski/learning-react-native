import { Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import useFetch from '@/app/fetch';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoriesData } from '../interface/data';
export default function Categories() {

    const {data, loading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const responseData : CategoriesData = data;
    if(loading){
        return <Text>Loading...</Text>
    }
    
    if(error){
        return <Text>{error}</Text>
    }

    return (
        <View>
            <Text>{loading}</Text>
            <Text>msaessi</Text>
            <ScrollView>
                {responseData?.categories.forEach((category:any) => {
                    <View>
                        <Text>{category?.strCategory}</Text>
                    </View>
                })}
            </ScrollView>
        </View>
    );
}