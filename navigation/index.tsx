import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { SearchBar, CartIcon } from '../components';
import LinkingConfiguration from './LinkingConfiguration';
import { Home, MyTickets, EventInfo, Cart } from '../screens';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen options={{ title: 'Event Info', headerShown: false }} name="ModalEventInfo" component={EventInfo} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Tickets',
          tabBarIcon: ({ color }) => <FontAwesome size={30} style={{ marginBottom: -3 }} name="ticket" color={color} />,
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            height: 90
          },
          headerTitle: (props) => <SearchBar />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Cart')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <CartIcon />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="MyTickets"
        component={MyTickets}
        options={{
          title: 'My Tickets',
          tabBarIcon: ({ color }) => <FontAwesome5 size={30} style={{ marginBottom: -3 }} name="wallet" color={color}  />,
        }}
      />
    </BottomTab.Navigator>
  );
}
