import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Register Screen</Text>
      <TouchableOpacity
        style={{ borderWidth: 1, padding: 20, width: '60%' }}
        onPress={() => navigation.goBack()}
      >
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
