import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import AddProductScreen from '../screens/AddProductScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigation initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'DailyFashion',
          headerStyle: {
            backgroundColor: '#D1E5C2',
          },
          headerTitleAlign: 'center',
          drawerIcon: config => <Icon name="home" type="antdesign" />,
        }}
      />
      <Drawer.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{
          title: 'AddProduct',
          headerStyle: {
            backgroundColor: '#D1E5C2',
          },
          headerTitleAlign: 'center',
          drawerIcon: config => <Icon name="plus" type="antdesign" />,
        }}
      />
    </Drawer.Navigation>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
