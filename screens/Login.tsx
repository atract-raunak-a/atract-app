import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text>Login Screen</Text>
      {/* <TouchableOpacity
        style={{ borderWidth: 1, padding: 20, width: '60%' }}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>Navigate</Text>
      </TouchableOpacity> */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity onPress={() => console.log(name)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

//flex-col by default
//flex: 1 , so that it takes full screen

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
