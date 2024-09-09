import { Image, StyleSheet, Platform,View, FlatList, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  let data:any = [
    {
      id: 0,
      title: 'Xiaomi Mi True Wireless Earbuds',
      imgURL:
        'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
      price: '₺134,77',
      inStock: true,
    },
    {
      id: 1,
      title: 'General Mobile GM 20',
      imgURL:
        'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
      price: '₺1.810,21',
      inStock: true,
    },
    {
      id: 2,
      title: 'Philips 58PUS8505/62 The One',
      imgURL:
        'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
      price: '₺6.992,25',
      inStock: false,
    },
    {
      id: 3,
      title: 'LG 49UM7100PLB Ultra HD 4K',
      imgURL:
        'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
      price: '₺4.614,38',
      inStock: true,
    },
    {
      id: 4,
      title: 'Samsung Galaxy M31 SM-M315F',
      imgURL:
        'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
      price: '₺2.995,80',
      inStock: true,
    },
    {
      id: 5,
      title: 'Apple AirPods Series 2',
      imgURL:
        'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
      price: '₺1.299,00',
      inStock: true,
    },
    {
      id: 6,
      title: 'Lenovo Tab M10 Plus',
      imgURL:
        'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
      price: '₺2.496,50',
      inStock: false,
    },
    {
      id: 7,
      title: 'Xiaomi Redmi 20000 Mah',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
      price: '₺134,70',
      inStock: false,
    },
    {
      id: 8,
      title: 'Xiaomi Mijia Smart Home 360',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
      price: '₺269,73',
      inStock: true,
    },
    {
      id: 9,
      title: 'Xiaomi Mi Box S 4K Ultra HD',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
      price: '₺478,53',
      inStock: true,
    },
    {
      id: 10,
      title: 'Haylou Solar LS-5 Smartwatch',
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
      price: '₺296,00',
      inStock: true,
    },
  ];

  return (
    <View style={{padding:10,gap:10}}>
        <FlatList data={data} renderItem={renderItem} numColumns={2}></FlatList>
    </View>
  );
}

const renderItem = ({item}:any) => {
  console.log(item);
  
  return (
    <View style={{padding:10,borderWidth:1,borderBlockColor:"gray",margin:5,borderRadius:5,flex:1}}
    >
      <Text>{item.title}</Text>
      <Image source={item.imgURL} width={100} height={100} style={{width:100,height:100,marginBottom:10,marginTop:10}}></Image>
      <Text>{item.price}</Text>
      <Text>{item.inStock ? "Stokta var":"Stokta yok"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
