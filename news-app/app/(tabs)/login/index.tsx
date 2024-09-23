import React,{ useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';


export default function Index() {
  
  const [username, setUsername] = useState("");

  return (
    <View className='p-2'>
        <Text>Username</Text>
        <TextInput className='border' />
        <Text className='mt-4'>Password</Text>
        <TextInput className='border' />
        <TouchableHighlight onPress={()=>{console.log("x");
        }} className='mt-3'>
            <View>
                <Text>Touch Here</Text>
            </View>
        </TouchableHighlight>
    </View>
  )
}
