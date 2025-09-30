import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/Main';
import AdminLogin from './screens/administrators/Login';
import AdminRegister from './screens/administrators/Register';
import EmployerLogin from './screens/employers/Login';
import EmployerRegister from './screens/employers/Register';
import JobSeekerLogin from './screens/jobSeekers/Login';
import JobSeekerRegister from './screens/jobSeekers/Register';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main Screen"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminRegister"
        component={AdminRegister}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EmployerLogin"
        component={EmployerLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EmployerRegister"
        component={EmployerRegister}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JobSeekerLogin"
        component={JobSeekerLogin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="JobSeekerRegister"
        component={JobSeekerRegister}
        options={{
          headerShown: false,
        }}
      />
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
