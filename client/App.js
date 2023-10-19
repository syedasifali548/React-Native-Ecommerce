import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';

export default function App() {
  const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
           <Stack.Navigator>
           <Stack.Screen name='home' component={Home}
           options={{
            headerShown:false
           }}
           />
           <Stack.Screen name='mobile' component={About}/>
           <Stack.Screen name='productdetails' component={ProductDetails}/>
           </Stack.Navigator>
        </NavigationContainer>
    );
}

