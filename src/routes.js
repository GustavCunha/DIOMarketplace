import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';

import Header from './components/Header';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    cardStyle: {backgroundColor: '#313746'},

                }}
            >
                <Stack.Screen
                    name="Catalog"
                    component={Catalog}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                        headerStyle: {
                            height: 50
                        }
                    }}
                />

                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerTransparent: true,
                        headerTitle: () => <Header />,
                        headerBackTitleVisible: false,
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                        headerBackImage: () => (
                            <Feather name="chevron-left" size={24} color="#f3f9ff"/>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
