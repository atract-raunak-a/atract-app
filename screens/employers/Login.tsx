import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const EmployerLogin = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Welcome <Text style={styles.name}>Employer!</Text>
        </Text>
        <Text style={styles.subtitle}>Secure access to your hiring tools</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.infoText}>Didn't receive verification email?</Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Resend Verification Email</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('EmployerRegister')}
          >
            Register here
          </Text>
        </Text>

        <Text style={styles.backLink} onPress={() => navigation.goBack()}>
          ← Back to Home
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  name: {
    color: '#1e88e5',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  infoText: {
    textAlign: 'center',
    marginTop: 16,
    color: '#333',
  },
  linkText: {
    textAlign: 'center',
    color: '#1e88e5',
    fontWeight: '700',
    marginTop: 4,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 16,
  },
  backLink: {
    marginTop: 16,
    textAlign: 'center',
    color: '#444',
  },
});

export default EmployerLogin;
