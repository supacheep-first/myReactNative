import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IndexScreen from './src/screens/IndexScreen';
import ApiScreen from './src/screens/ApiScreen';
import MapScreen from './src/screens/MapScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="white" inactiveColor="black" barStyle={{ backgroundColor: 'red' }}>
      <Tab.Screen name="Home" component={IndexScreen} options={{
        tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Api" component={ApiScreen} options={{
        tabBarLabel: 'Api', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="function" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Map" component={MapScreen} options={{
        tabBarLabel: 'Map', tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="google-maps" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      <StatusBar style={{ color: "black" }} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  cusHeader: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  cusFooter: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  cusfont: {
    color: "red", fontSize: 18, fontWeight: "bold",
  }, mainView: {
    flex: 1,
  },
});