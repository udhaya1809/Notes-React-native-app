import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RootStackNavigator from './navigation';

export default function App() {
    return (
      <>
      <StatusBar style='light' />
      <RootStackNavigator/>
      </>
    );
  }