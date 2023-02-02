import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Helper from './Normal Helper';
import Emergency from './EmergencyHelper';
import Profile from './Profile';

const Stack = createStackNavigator()

const List = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                {/* <Stack.Screen name='Helper' component={Helper} options={{ headerShown: false }} /> */}
                <Stack.Screen name='Emergency' component={Emergency} options={{ headerShown: false }} />
                {/* <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default List
