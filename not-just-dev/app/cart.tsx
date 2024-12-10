import { StatusBar } from 'expo-status-bar'
import {Platform, Text, View} from 'react-native'
import Button from '@/components/ui/Button'

const cart = () => {
  return (
    <View style={{padding: 10}}>
    
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    <Text style={{marginVertical: 10, fontSize: 18, fontWeight: "500"}}>Total:</Text>
    <Button text='Check Out'/>

    </View>
  )

   
}

export default cart