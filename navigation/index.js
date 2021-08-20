import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Notes from '../screens/NoteScreen';
import Saved from '../screens/SavedNotes';

const Stack = createBottomTabNavigator();

export default function RootStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Notes' component={Notes} 
                options={{ 
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => 
                    (<AntDesign name="home" size={24} color="black" />),
                    headerStyle: { backgroundColor: '#000', }, 
                    headerTitleAlign: 'center', 
                    headerTitleStyle: { 
                        color: '#fff', 
                        fontWeight: '700', 
                        fontSize: 24,
                    },
                    headerLeft: () => 
                    <Entypo 
                    name="save" size={22} color="#fff" style={styles.menu} 
                    onPress={() => {
                        alert('you tapped the icon')
                    }}
                    />,
                    headerRight: () => 
                    <Entypo
                    name="back" size={26} color="#fff" style={styles.option} />
                }} 
                />
                <Stack.Screen name='Saved Notes' component={Saved} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => 
                    (<Entypo name="list" size={24} color="black" />),
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles= StyleSheet.create({
    menu: {
        marginLeft: 20,
    },
    option: {
        marginRight: 20,
    },
});