import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/employer/Login';
import { NavigationContainer } from '@react-navigation/native';
import Register from './screens/employer/Register';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
